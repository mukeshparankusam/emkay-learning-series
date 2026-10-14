# EMKAY LEARNING SERIES — Build Guide

## ప్రస్తుత build‌లో ఏముంది?
- Classes 6–12 కోసం class selector.
- Classes 6–10 కోసం foundational subject areas.
- Classes 11–12 కోసం senior-secondary subjects navigation.
- Responsive design, EMKAY logo, subject cards, chapter learning panel.
- Class 8 Science‌లో clearly labelled demonstration lesson.
- Concept explanations, expandable question answers, MCQ practice, 4-question interactive quiz with score.
- EMKAY chat UI మరియు server-side API endpoint placeholder.
- Chapter quality-control schema.

## ముఖ్యమైన పరిమితి
ఇది complete textbook library కాదు. Demonstration lesson తప్ప మిగతా chapters‌కు verified chapter content ఇంకా తయారు చేయాలి. Official NCERT textbook edition, chapter title, syllabus applicability, questions, answers‌ను check చేయకుండా published status ఇవ్వకూడదు.

## GitHub Pages
1. `emkay-learning-series` అనే కొత్త repository create చేయండి.
2. ఈ folder‌లోని files అన్నింటినీ repository root‌కు upload చేయండి.
3. Settings → Pages → Deploy from a branch → `main` → `/ (root)` ఎంచుకోండి.
4. Live AI chat కోసం Node backend‌ను వేరే secure hosting‌కు deploy చేసి API key‌ను server environment variable‌గా మాత్రమే ఉంచాలి. GitHub Pages static hosting మాత్రమే.

## ప్రతి chapter‌కు minimum checklist
1. సరైన textbook title, class, subject, edition/reprint year.
2. Syllabus mapping, learning objectives, prerequisites.
3. Chapter‌లోని అన్ని concepts‌కు పూర్తి explanations.
4. Worked examples, formulas/derivations అవసరమైతే.
5. అవసరమైన labelled diagrams/maps/graphs/timelines.
6. In-text questions, exercise solutions, reasoning.
7. Topic-wise MCQs, answers, explanations, application questions.
8. Revision notes, quick recap, chapter test.
9. Subject review మరియు textbook verification.
10. Review status: draft → subject_review → textbook_verified → published.
