# Liberation War Archive

A static, multi-page website preserving documents, interview testimonies, and photographs from Bangladesh's 1971 Liberation War.

## Tech Stack
- Plain HTML5, CSS3, JavaScript — no build tools, no npm, no node_modules
- Bootstrap 5 (CDN) for layout, navbar, tabs, modals, forms
- Font Awesome (CDN) for icons
- Google Fonts (Merriweather + Source Sans 3) for typography

## Running the Site
Open the folder in VS Code and use the "Live Server" extension on any `.html` file (e.g. `index.html`). No server-side setup is required.

## Photo Credits (Gallery and Documents pages)
Real, openly-licensed 1971 Liberation War photographs from Wikimedia Commons are used on the Gallery and Documents pages:
- 7 March 1971 Speech, Ramna Race Course — Press Information Department, Government of Bangladesh (public domain)
- Instrument of Surrender, 16 December 1971 — Government of India (GODL)
- Shaheed Minar, Dhaka — Mostaque Ahammed (CC BY-SA 2.0)
- Independence Celebration, Dohar, Dhaka — Anwar Hossain / Press Information Department, Government of Bangladesh (public domain)
- Arms Surrender Ceremony, Dhaka Stadium — Press Information Department, Government of Bangladesh (public domain)
- Liberation War Museum, Dhaka — Ahm masum (CC BY-SA 4.0)
- Major Ziaur Rahman (portrait) — Nationaal Archief / Spaarnestad Photo (CC BY-SA 3.0 NL)

The homepage hero also uses the 7 March 1971 Speech photo as a cover background image.

## Ziaur Rahman's Contribution
Major Ziaur Rahman's role is presented as a neutral, factual historical record, not a political statement: on 27 March 1971 he broadcast a declaration of independence from Kalurghat radio station on behalf of Sheikh Mujibur Rahman. This appears in three places:
- **documents.html** — "Kalurghat Radio Declaration" card (Declaration category)
- **gallery.html** — his portrait in the Events tab
- **interviews.html** — a "historical note" entry (not a fabricated first-person testimony, since no personal interview is attributed to him here) with a biographical table and related archival footage

Credit lines are shown in the gallery modal for each photo. The "Simla Agreement" and "Correspondence" document cards still use simple SVG graphics since no suitably licensed photo of those specific documents was found.

## Known Placeholders
- The Interviews page (`interviews.html`) presents 4 fictional/composite interviewees for demo purposes. Each modal embeds a real YouTube documentary/archival video (labeled "Related Archival Footage") plus a local audio file reference (labeled "Audio Demo (Sample)") to demonstrate both native `<audio>` and embedded `<iframe>` video playback — the audio files themselves (`assets/audio/*.mp3`) are not included and should be replaced with real recordings before publishing.
- The Contact form validates in the browser only; it does not submit to a server or email address yet.

## Spec Traceability

| Spec Item | Description | Implemented In | Status |
|---|---|---|---|
| Homepage 1.a | Intro explaining archive's significance | index.html hero section | Done |
| Homepage 1.b | Featured sections linking to Documents/Interviews/Photographs | index.html featured cards | Done |
| Documents 2.a | Catalog description (treaties, declarations, correspondence) | documents.html intro paragraph | Done |
| Documents 2.b | Categorized by type/date/relevance | documents.html filter buttons + badges + document-filter.js | Done |
| Documents 2.c | Detail view with publication date and source information | documents.html modals (doc1-doc6) with table | Done |
| Interviews 3.a | Intro to interview collection | interviews.html intro paragraph | Done |
| Interviews 3.b | Biographical details table | interviews.html modals (interview1-4) | Done |
| Interviews 3.c | Native audio/video playback of testimony | interviews.html `<audio controls>` (demo) + embedded YouTube video (real archival footage) | Done (audio file is a placeholder) |
| Gallery 4.a | Intro to curated photo collection | gallery.html intro paragraph | Done |
| Gallery 4.b | Categorized by Events/Locations/Themes | gallery.html Bootstrap nav-tabs | Done |
| Gallery 4.c | Zoom functionality and download option | gallery.html modal + gallery-zoom.js + download link | Done |
| Contact 5.a | Invitation for inquiries/feedback/contributions | contact.html intro paragraph | Done |
| Contact 5.b | Form with file upload for documents/photos | contact.html form, `#attachment` file input | Done |
| Contact 5.c | Direct contact info for administrators | contact.html right column table | Done |
| Technical 1 | Semantic HTML5 (header/nav/main/section/footer) | all pages | Done |
| Technical 2.a | Accessibility (alt text, labels, contrast, keyboard nav) | all pages, form labels, image alt attributes | Done |
| Technical 3.a-b | Meta description per page + JSON-LD on homepage | all `<head>` sections, index.html Organization schema | Done |
| Technical 4.a | Local server via Live Server acceptable for coursework | N/A (workflow note) | Done |
| Testing 1-2 | Interactive elements (filters, tabs, modals, players, form) all functional | manual click-through required by student | Pending manual verification |
| Testing 3 | Full spec traceability | this table | Done |
