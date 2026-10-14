# Verification status — EMKAY Learning Series v6

## Implemented in this package
- Responsive Classes 6–12 learning shell and subject selector.
- Separate Class 6 Mathematics chapter inventory for *Ganita Prakash* with 10 chapter titles.
- Original supplementary guide for Class 6 Mathematics Chapter 1, *Patterns in Mathematics*: 13 concept explanations, 8 worked examples, 12 self-check practice items, 10 MCQs with answer explanations, and revision prompts.
- Interactive MCQ test with scoring, missed-answer review, and local progress storage.
- Dedicated search-friendly chapter landing page at `class-6/mathematics/patterns-in-mathematics/`.
- Existing illustrative Class 8 Science sample remains explicitly marked as a demonstration, not a complete verified chapter.
- Server-side AI route exists, but live answers require a private server-side API key and deployment; it is not activated by this package alone.
- Basic accessibility and responsive UI checks.

## Tests run
- `node --check app.js`: passed.
- `npm test`: passed.
- Local HTTP homepage request: 200.
- Local HTTP `class6-mathematics.json` request: 200.
- Dataset validation: 10 chapter titles, 13 concepts, 8 worked examples, 12 practice questions, 10 MCQs; every MCQ answer index is within its options array.

## Not complete — do not claim otherwise
- This is not a complete Classes 6–12 textbook library.
- Only Class 6 Mathematics Chapter 1 has a substantive original learning guide in this release. Chapter titles 2–10 are listed, but their full lessons and exercises are not written/reviewed.
- Chapter 1 content is not an official NCERT answer key and does not claim to cover every textbook `Figure it Out` item.
- Exact school-prescribed edition, language and all chapter inventories must be confirmed against the official NCERT portal and applicable CBSE curriculum before launch.
- Other class/subject content, student accounts, cloud progress sync, production rate limiting, privacy/legal pages, custom-domain canonical URLs, Search Console verification and live AI deployment remain outstanding.
- Google indexing/ranking cannot be guaranteed. Add a production sitemap only after the final domain and real published URLs are known.

## Authoritative entry points
- NCERT textbook portal: https://ncert.nic.in/textbook.php
- CBSE curriculum 2026–27: https://cbseacademic.nic.in/curriculum_2027.html

NCERT states that textbooks are copyrighted and republication is prohibited. This package links to the official portal and uses original supplementary explanations rather than rehosting textbook scans.
