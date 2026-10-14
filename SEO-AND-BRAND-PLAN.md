# EMKAY LEARNING SERIES — Search Visibility & Brand Language Plan

## Honest objective
Build discoverable, useful pages for real student searches such as “Class 9 Science chapter … explanation”, “Class 11 Chemistry numericals step by step”, and “NCERT Class 7 Maths exercise solutions”. These are examples of search intent, not a promise of ranking. Google decides whether and where to show a page; indexing and ranking cannot be guaranteed.

## Our own brand vocabulary
Use these names as memorable EMKAY labels, while retaining ordinary words students actually search for in the explanatory headings and page metadata. Invented branding alone will not help people find the site.

- **Concept Trail** — the chapter’s ordered concept-by-concept teaching path.
- **Picture Lens** — labelled diagrams, maps, graphs and visual explanations.
- **Worked Path** — fully explained examples and numerical solutions.
- **Textbook Answer Desk** — NCERT in-text and exercise solutions checked against the specified edition.
- **Practice Arena** — topic-wise MCQs and application questions with explanations.
- **Recall Cards** — concise revision points, formula cards and memory prompts.
- **Mastery Check** — chapter test, score and explanations for incorrect answers.
- **Ask EMKAY** — AI-supported doubt explanation, enabled only after a secure backend is configured.

Example chapter page title: `Class 9 Science: Atoms and Molecules — Explanation & NCERT Solutions | EMKAY`
Example H1: `Atoms and Molecules — Class 9 Science`
Example description: `Learn Class 9 Science Atoms and Molecules with clear concept explanations, worked examples, NCERT exercise solutions, practice questions and a chapter test.`

## Technical SEO work required before launch
1. Give every published chapter a stable, readable, unique URL (not only a JavaScript modal or `#` fragment).
2. Serve useful, original chapter text in crawlable HTML; ensure the page returns HTTP 200 and is not blocked by robots or `noindex`.
3. Write a unique title, meta description, H1 and descriptive image alt text for every page. Keep terms natural; do not keyword-stuff.
4. Add internal links: class → subject → chapter → related chapters; ensure each page is reachable with normal crawlable links.
5. Set the canonical domain after the final domain is chosen, then generate a sitemap containing only real, canonical, published URLs. Do not submit placeholder URLs.
6. Add `robots.txt`, validate sitemap, verify the domain in Google Search Console, submit sitemap, and inspect sample URLs after deployment.
7. Add structured data only where eligible and truthful; do not invent ratings, reviews, course claims or author credentials.
8. Optimise images, loading performance, mobile layout, keyboard navigation, contrast and accessibility.
9. Publish an editorial policy, contact/about information, correction process, source/edition details and clear independence statement. Do not imply official NCERT affiliation.
10. Track Search Console queries, impressions, clicks, indexing errors and page experience; improve content based on evidence.

## Content-led search strategy
- Create genuinely useful pages that answer the specific student question, not thin pages generated just to target keywords.
- Include common wording variants naturally: “chapter explanation”, “summary”, “exercise solutions”, “in-text questions”, “important questions”, “MCQs”, “numericals”, “revision notes”, and the exact class/subject/chapter.
- Every page must include original teaching, examples, relevant visuals, solutions with reasoning, practice and revision. Cite the textbook edition used and record review status internally.
- Link to official NCERT textbook sources where useful. Do not republish complete copyrighted textbook scans or pass unverified content off as official.
- Start with a verified, high-quality set of chapter pages; expand systematically. A large empty catalogue is not a substitute for content.

## Deployment reality
GitHub Pages can host the static site, but the AI service needs a separate secure backend. A domain, indexing request, sitemap or SEO settings cannot guarantee first-page placement. Search performance grows from crawlability, unique helpful content, trust, competition and time.

## Launch checklist
- [ ] Final production domain chosen and HTTPS working
- [ ] All published chapter pages have verified content and unique URLs
- [ ] `robots.txt` and production sitemap point to the correct domain
- [ ] Google Search Console property verified and sitemap submitted
- [ ] Mobile, accessibility, performance and broken-link checks passed
- [ ] AI backend tested; secrets stored server-side
- [ ] Privacy policy and student data handling reviewed before accounts are enabled
