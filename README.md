# EMKAY LEARNING SERIES

A responsive, GitHub Pages-friendly learning website foundation for Classes 6–12. Includes the supplied EMKAY logo, class and subject selection, senior-secondary subject areas, a demonstrator lesson with concept explanations and question answers, a multi-question interactive quiz, and the EMKAY chat interface.

## Important status

This is a working website foundation, **not yet a complete NCERT library**. Only the clearly labelled Class 8 Science demonstration lesson contains sample lesson content. Other classes and subjects have a navigation shell while their exact prescribed textbook/edition and chapter inventory are verified. Do not present pending chapters as completed content.

## Preview locally

Requires Node.js 18+.

```bash
npm start
```

Open `http://localhost:3000`.

## Publish to GitHub Pages

1. Create a new repository named `emkay-learning-series` (do not overwrite the personal or school website repositories).
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for GitHub Pages to publish. Relative asset paths are used so the project can run in a repository subpath.

The static learning interface can be hosted on GitHub Pages. The `server.mjs` AI endpoint is not hosted by GitHub Pages; deploy it separately to a secure server or serverless platform and configure the frontend endpoint before enabling real AI answers.

## Enable the AI assistant

The local Node server exposes `/api/emkay`. Set the API key only as a server environment variable, never in `app.js` or any browser file:

```bash
OPENAI_API_KEY="your-key" npm start
```

Optional model override: `OPENAI_MODEL`. A production deployment also needs rate limiting, abuse protection, privacy disclosures, monitoring and spending limits. AI usage may cost money.

## Complete chapter quality checklist

For every class/subject/book/chapter, verify the exact prescribed textbook and edition and create original learning material covering:

- All syllabus concepts, definitions, explanations and prerequisites
- Worked examples, derivations and applications where relevant
- Appropriate labelled diagrams, maps, timelines, graphs or flowcharts
- NCERT in-text and exercise question solutions with reasoning
- Topic-wise MCQs, answer explanations and application/HOTS questions
- Revision notes, formula sheets or chapter mind map where relevant
- Interactive test, score feedback and error review
- Subject review, textbook verification and publication status

The content schema is in `content-registry.json`. The official NCERT textbook portal is https://ncert.nic.in/textbook.php. Subjects differ by class, stream, language and school offering; verify applicability rather than claiming every subject is an NCERT textbook in every class. Link to official textbook PDFs instead of re-hosting complete copyrighted books.

## Search visibility and original brand language

See `SEO-AND-BRAND-PLAN.md` for the search strategy, EMKAY-specific feature names, and launch checklist. `robots.txt` and `sitemap-template.xml` are templates: set the production domain and add only real published URLs before launch. SEO work makes pages eligible and easier to understand; it cannot guarantee Google ranking.

## v6 content addition

Class 6 Mathematics now has a separate chapter register for *Ganita Prakash* and a substantial original study guide for Chapter 1, **Patterns in Mathematics**. It contains thirteen concept explanations, eight worked examples, twelve original practice questions, ten MCQs with explanations, revision prompts, an interactive scored test, missed-answer review, and local progress storage. A dedicated search-friendly landing page is included at `class-6/mathematics/patterns-in-mathematics/`.

This is still a partial content release. Chapter titles 2–10 are an inventory only; they do not yet have complete learning packages. The Class 6 Mathematics chapter register must be confirmed against the exact book/reprint prescribed by the school before being labelled fully verified. See `VERIFICATION-STATUS.md`.
