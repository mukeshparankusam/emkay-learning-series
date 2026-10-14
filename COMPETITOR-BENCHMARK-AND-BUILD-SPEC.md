# EMKAY LEARNING SERIES — Competitor Benchmark & Build Specification

**Status:** Planning and architecture document. This is not a claim that the complete site or all chapter content is finished.

## 1. Large platforms reviewed

### Khan Academy
**Publicly documented strengths:** concept articles/videos, practice exercises, quizzes, unit tests, course challenges, mastery levels, skill-level progress, recommendations after performance, learner/teacher reports.

**EMKAY response:** a chapter-level learning path that makes the next action obvious; topic-level progress; quick diagnostic; targeted retry on mistakes; revision queue; clear explanation before and after every assessment.

### Vedantu
**Publicly documented strengths:** NCERT solutions, revision notes, formula sheets, assignments/homework, subjective and objective tests, sample papers, progress reporting, broad subject coverage.

**EMKAY response:** connect all learning assets to the same verified textbook/chapter record, rather than scattering notes, solutions and tests across disconnected pages. Label textbook answers, original teaching material and extra practice distinctly.

### BYJU'S
**Publicly documented strengths:** visual/animated lessons, personalised learning journeys, syllabus-mapped topics, practice and assessments.

**EMKAY response:** use visuals only when they teach something; provide readable diagrams, labels, text alternatives, worked examples and low-bandwidth layouts. Do not make a video mandatory for understanding.

### Physics Wallah
**Benchmark areas:** school learning paths, course materials, practice tests and doubt support.

**EMKAY response:** make the self-study experience complete even when the student is not enrolled in a live class: textbook chapter, explanation, solutions, practice, revision and self-test stay connected.

### NCERT ePathshala / NCERT official textbook portal
**Role:** source of truth for textbook identity, chapter sequence, editions and official learning resources. Use official links; do not republish complete copyrighted textbooks without permission.

### CBSE Academic Curriculum
**Role:** source for current subject applicability, subject options, curriculum changes and assessment scope, especially Classes IX–XII.

## 2. EMKAY product principles

1. **Textbook-first, not guessed:** every chapter record must have class, subject, textbook title, edition/session, part/volume, chapter number, exact title, official source URL and verification status.
2. **No silent omissions:** chapter count in the registry must match the official contents page. Keep an audit trail for renamed, moved, merged, rationalised or removed chapters.
3. **Chapter completeness checklist:** learning goals, prerequisite concepts, every required concept/subtopic, definitions, formulas/derivations where relevant, worked examples, real-world applications, visual assets, in-text question guidance, exercise solutions, practice questions, answer explanations, revision notes, quiz and review status.
4. **Distinct source labels:** “Textbook question”, “EMKAY explanation”, “Worked example”, “Extra practice” and “Revision” must not be confused.
5. **Evidence-led progress:** track topic completion and mastery separately; an opened page is not proof of understanding.
6. **Helpful error feedback:** explain why an answer is wrong, identify the concept involved and offer a retry or prerequisite lesson.
7. **AI with guardrails:** the assistant should know the selected class, subject, textbook and chapter; explain step by step; admit uncertainty; avoid inventing textbook quotes; cite the relevant EMKAY section; use a secure backend, never a browser-exposed API key.
8. **Accessible visuals:** diagrams, maps, timelines, tables, graphs and alt text where useful. Avoid decorative visuals that do not support learning.
9. **Search-friendly pages:** unique title, description, canonical URL, readable headings, useful original content, internal links, breadcrumbs, structured data only when eligible, sitemap containing only real public URLs, Search Console checks. No ranking guarantees.
10. **Mobile-first and fast:** semantic HTML, keyboard navigation, accessible contrast, compressed assets, lazy loading for non-critical media and graceful failure when AI is unavailable.

## 3. Proposed original EMKAY feature names

| EMKAY name | Purpose |
|---|---|
| Concept Trail | Sequential explanation of every chapter concept |
| Picture Lens | Labelled diagrams, maps, timelines, graphs and flowcharts |
| Worked Path | Step-by-step worked examples and numericals |
| Textbook Answer Desk | Chapter-wise textbook question guidance and solutions |
| Practice Arena | Topic-wise practice from foundational to application level |
| Recall Cards | Definitions, formulas, key facts and spaced revision |
| Mastery Check | Quiz, chapter test, feedback and retry recommendations |
| Learning Pulse | Topic-level progress and weak-concept summary |
| Ask EMKAY | Context-aware doubt assistant |

These names are brand labels, not replacements for common search phrases. Page titles and headings should still use natural student search language such as “Class 9 Science Chapter … Explanation and Questions”.

## 4. Required master registry schema

Each textbook record must include:
- academic_session
- class
- board/curriculum
- subject_code and subject_name
- subject applicability / stream / option notes
- official textbook title
- edition or publication year
- part/volume
- official source URL and access date
- contents-page verification status
- chapter_count_verified

Each chapter record must include:
- stable chapter_id
- exact chapter_number and exact official chapter_title
- source page(s) or contents-page reference
- status: `not_started`, `inventory_verified`, `content_draft`, `subject_review`, `qa_review`, `published`
- all learning asset completion flags
- reviewer notes and last_checked date
- canonical page URL once published

Do not create a numeric “total chapter count” until every in-scope book and part is verified for the chosen academic session.

## 5. QA gates before launch

### Registry gate
- Every in-scope textbook is identified from official sources.
- Chapter order and exact titles are checked against the contents page.
- Chapter totals reconcile per textbook and per part.
- Subjects are listed as applicable, not assumed to apply to every learner.

### Content gate
- Every required concept has coverage evidence.
- Numerical answers are recalculated; scientific equations and units are checked.
- Language answers and literature summaries are reviewed for fidelity.
- Diagrams are labelled and accurate.
- No unlicensed full-text reproduction.

### Product gate
- Class/subject/chapter search works.
- Chapter pages have unique, stable URLs.
- Keyboard/mobile/accessibility smoke tests pass.
- Quiz scoring and feedback work.
- AI failures are handled safely; no secret key appears in frontend files.
- Sitemap only contains real public pages; robots and canonical URLs are correct.

## 6. Build order

1. Freeze academic-session scope and master textbook registry.
2. Verify exact chapter sequence and counts book by book.
3. Finalise page/data schema and original EMKAY design system.
4. Implement homepage, search, class/subject navigation and chapter template.
5. Create content authoring/review workflow and chapter-completeness dashboard.
6. Produce and subject-review chapter content in batches.
7. Implement quiz scoring, progress persistence and AI backend.
8. Run registry, content, accessibility, SEO and functional audits.
9. Package the repository and publish only after the launch gates pass.

## 7. Source links

- NCERT textbook portal: https://ncert.nic.in/textbook.php
- NCERT Class VI–VIII textbook page (example official portal entry): https://ncert.nic.in/textbook.php?jesc1=6-8
- CBSE 2026–27 curriculum: https://cbseacademic.nic.in/curriculum_2027.html
- Khan Academy mastery overview: https://support.khanacademy.org/hc/en-us/articles/360007253831-What-is-self-paced-Mastery
- Khan Academy student learning guide: https://en.khanacademy.org/resources/students/resources-for-students/a/getting-started-with-khan-academy
- Vedantu official site: https://www.vedantu.com/
- BYJU'S learning overview: https://byjus.com/learn-from-home/
- PW: https://www.pw.live/

## Honest status
This document captures the benchmark findings and build requirements. The exact Classes 6–12 registry, all chapter content, AI service, full progress persistence and final production audit remain work items until their completion is verified.
