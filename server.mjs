import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'};
const rateWindows = new Map();
function rateAllowed(ip) {
  const now = Date.now(); const windowMs = 60_000; const max = 20;
  const item = rateWindows.get(ip);
  if (!item || now - item.start >= windowMs) { rateWindows.set(ip, {start: now, count: 1}); return true; }
  if (item.count >= max) return false; item.count += 1; return true;
}
const server = http.createServer(async (req,res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (req.method === 'POST' && url.pathname === '/api/emkay') {
    const clientIp = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
    if (!rateAllowed(clientIp)) { res.writeHead(429, {'content-type':'application/json'}); res.end(JSON.stringify({error:'Too many requests. Please wait a minute and try again.'})); return; }
    if (!apiKey) { res.writeHead(503, {'content-type':'application/json'}); res.end(JSON.stringify({error:'AI is not configured yet. Add OPENAI_API_KEY on the server to activate EMKAY.'})); return; }
    try {
      let body=''; for await (const chunk of req) { body += chunk; if (body.length > 32_000) { res.writeHead(413, {'content-type':'application/json'}); res.end(JSON.stringify({error:'Message is too long. Please shorten it and try again.'})); return; } }
      const data = JSON.parse(body || '{}');
      if (!Array.isArray(data.messages) || data.messages.length === 0) throw new Error('Please enter a question.');
      const messages = data.messages.slice(-12).map(m => ({role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0,6000)}));
      const system = `You are EMKAY, the learning assistant for EMKAY LEARNING SERIES, supporting students in Classes 6–12. Help with school subjects and senior-secondary streams where applicable. Do not imply that every subject is available in every class or that supplementary subjects are official NCERT subjects. Explain patiently, at the student's grade level, step by step. For calculations, verify arithmetic. For textbook-specific questions, do not invent NCERT wording, chapter titles, page numbers, or official answers. If the exact textbook edition or question is not supplied, ask the student to paste or upload the question and clearly distinguish a conceptual explanation from a verified textbook answer. If unsure, say so. Do not claim you can see a textbook unless its content is provided in the conversation.`;
      const upstream = await fetch('https://api.openai.com/v1/chat/completions', {method:'POST', headers:{'authorization':`Bearer ${apiKey}`,'content-type':'application/json'}, body:JSON.stringify({model, messages:[{role:'system',content:system},...messages], temperature:0.3})});
      const result = await upstream.json();
      if (!upstream.ok) throw new Error(result?.error?.message || 'AI request failed.');
      res.writeHead(200, {'content-type':'application/json'}); res.end(JSON.stringify({reply:result.choices?.[0]?.message?.content || 'I could not prepare an answer. Please try again.'}));
    } catch(e) { res.writeHead(500, {'content-type':'application/json'}); res.end(JSON.stringify({error:e.message || 'Something went wrong.'})); }
    return;
  }
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === '/') pathname = '/index.html';
  else if (pathname.endsWith('/')) pathname += 'index.html';
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root)) { res.writeHead(403); res.end('Forbidden'); return; }
  try { const content = await readFile(file); res.writeHead(200, {'content-type':mime[path.extname(file)] || 'application/octet-stream'}); res.end(content); }
  catch { res.writeHead(404, {'content-type':'text/plain; charset=utf-8'}); res.end('Not found'); }
});
server.listen(port, () => console.log(`EMKAY Learning Series running at http://localhost:${port}`));
