import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('./styles.css', import.meta.url), 'utf8');
const app = await readFile(new URL('./app.js', import.meta.url), 'utf8');
const registry = JSON.parse(await readFile(new URL('./content-registry.json', import.meta.url), 'utf8'));
const math = JSON.parse(await readFile(new URL('./class6-mathematics.json', import.meta.url), 'utf8'));
const inventory = JSON.parse(await readFile(new URL('./curriculum-inventory.json', import.meta.url), 'utf8'));
const inventoryCsv = await readFile(new URL('./curriculum-inventory.csv', import.meta.url), 'utf8');
const lessonManifest = JSON.parse(await readFile(new URL('./lessons/manifest.json', import.meta.url), 'utf8'));
for (const id of ['classRow','subjectGrid','chapterPanel','chatPanel','chatForm','quizModal','searchInput']) assert.ok(html.includes(`id="${id}"`), `Missing UI element: ${id}`);
for (const feature of ['renderClasses','renderSubjects','renderChapters','renderClass6Math','renderMathLesson','startMathQuiz','localStorage','fetch']) assert.ok(app.includes(feature), `Missing app feature: ${feature}`);
for (const feature of ['@media',':focus-visible','prefers-reduced-motion']) assert.ok(css.includes(feature), `Missing responsive/accessibility feature: ${feature}`);
assert.deepEqual(registry.classes, [6,7,8,9,10,11,12]);
assert.equal(inventory.project, 'EMKAY LEARNING SERIES');
assert.equal(inventory.books.length, inventory.bookCount);
assert.equal(inventory.books.reduce((n,b)=>n+b.chapters.length,0), inventory.chapterPdfCount);
assert.ok(inventory.classes.includes(6) && inventory.classes.includes(12));
assert.ok(inventory.chapterPdfCount > 500, 'Expected a consolidated inventory of the supplied numbered textbook PDFs');
assert.ok(inventory.books.every(b=>b.sourceZip && b.subject && b.bookTitle && b.chapters.length));
assert.ok(inventory.books.every(b=>b.chapters.every(c=>c.pdfSourceName && c.titleCandidate && c.titleVerified === false)));
assert.ok(inventoryCsv.includes('Extracted title candidate'));
assert.ok(app.includes('curriculum-inventory.json') && app.includes('data-book-index')); // runtime inventory integration
assert.ok(app.includes('renderAuthoredLesson') && app.includes('lessons/manifest.json'));
assert.ok(Object.keys(lessonManifest.lessons).length >= inventory.chapterPdfCount, 'Expected all indexed chapters to have lesson routes');
assert.equal(lessonManifest.generatedPackageCount, inventory.chapterPdfCount);
for (const [key, path] of Object.entries(lessonManifest.lessons)) {
  const lesson = JSON.parse(await readFile(new URL('./' + path, import.meta.url), 'utf8'));
  assert.ok(lesson.chapter && lesson.summary && lesson.goals.length >= 4, `Incomplete lesson ${key}`);
  assert.ok(lesson.concepts.length >= 3 && lesson.workedExamples.length >= 2, `Lesson concepts/examples missing ${key}`);
  assert.ok(lesson.practice.length >= 4 && lesson.mcqs.length >= 4, `Lesson practice/MCQs missing ${key}`);
  assert.ok(lesson.revision.length >= 4 && lesson.chapterTest.questions.length >= 3, `Lesson revision/test missing ${key}`);
  assert.ok(lesson.mcqs.every(q => q.answer >= 0 && q.answer < q.options.length && q.why), `Invalid MCQ in ${key}`);
}
assert.equal(math.metadata.class, 6);
assert.equal(math.chapters.length, 10);
assert.equal(math.lesson.title, 'Patterns in Mathematics');
assert.ok(math.lesson.concepts.length >= 13);
assert.ok(math.lesson.workedExamples.length >= 8);
assert.ok(math.lesson.practice.length >= 12);
assert.equal(math.lesson.mcqs.length, 10);
for (const [i,q] of math.lesson.mcqs.entries()) {
  assert.ok(q.q && q.why, `MCQ ${i+1} missing question/explanation`);
  assert.ok(q.answer >= 0 && q.answer < q.options.length, `MCQ ${i+1} has invalid answer index`);
}
assert.ok(math.lesson.disclaimer.includes('not an official NCERT answer key'));
console.log(`PASS: UI, accessibility hooks, Class 6–12 registry, ${inventory.bookCount} supplied books, ${inventory.chapterPdfCount} chapter PDFs, all indexed chapter lesson packages (plus the dedicated Mathematics Chapter 1 viewer), lesson schema, MCQ answer indices, and content-status disclaimers.`);
