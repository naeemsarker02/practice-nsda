# Personal Portfolio Website

A plain static multi-page portfolio built with HTML5, Bootstrap 5 (CDN), and vanilla JavaScript. No build tools, no npm, no framework beyond Bootstrap.

## Folder structure

```
index.html
about.html
portfolio.html
service.html
contact.html
partials/header.html
partials/footer.html
css/custom.css
js/include.js
js/navbar.js
js/footer.js
js/formValidation.js
assets/images
assets/icons
```

## How to run

The navbar and footer are loaded into every page with `fetch()`, which browsers block on `file://` URLs. So you **must** use a local server, not double-click the HTML file:

1. Install the VS Code "Live Server" extension if you don't have it.
2. Right-click index.html.
3. Click "Open with Live Server".

For a proper local server (matches the "deployed on a local secure web server" requirement), Live Server gives you `http://127.0.0.1:5500`. If your course strictly requires HTTPS testing, install `mkcert`, generate a local certificate, and serve the folder with any static server that accepts a cert (e.g. `http-server -S -C cert.pem -K key.pem`). This is optional for a static front-end-only project.

## Notes

Bootstrap 5 and Font Awesome are loaded from CDN links in every page's head. The navbar and footer live once in `partials/header.html` and `partials/footer.html`, and `js/include.js` fetches and injects them into every page's `#header-placeholder` / `#footer-placeholder` divs, so all 5 pages always show the exact same navbar/footer with a single source of truth to edit.

`css/custom.css` sets `body` to a flex column with `min-height: 100vh` and `main` to `flex: 1 0 auto`, so the footer always sits pinned to the bottom of the viewport on every page — even short ones like Contact — instead of floating mid-page.

Real photos live in `assets/images/`: `my_img.jpg` (used on the Home and About pages) and `certificate.png` (used for all 3 certificate cards on the Portfolio page — only one real certificate file exists right now, so add more images there and update the `src` attributes in `portfolio.html` if you have additional certificates).

Each page includes a JSON-LD `<script type="application/ld+json">` block for SEO structured data (Person / Service / ContactPage schema). This is the one inline `<script>` allowed in this project since it holds data, not logic.

## Cross-browser check notes

Manually tested by opening every page in Chrome, Firefox and Edge:
- Navbar collapse/hamburger, carousel, modal and accordion all rely on Bootstrap's own JS bundle and behaved the same in all three.
- No vendor-prefixed CSS was needed; Bootstrap handles that internally.

## Traceability matrix

| Spec item | File / Section | Status |
|---|---|---|
| 1.a Home banner slider (Carousel) | index.html - #bannerCarousel | Done |
| 1.b Home About Me | index.html - About Me section | Done |
| 1.c Home Mission & Vision | index.html - Mission & Vision cards | Done |
| 1.d Home Service List | index.html - Services grid | Done |
| 1.e Home Client Feedback | index.html - Client Feedback cards | Done |
| 2.a About page title | about.html - hero banner | Done |
| 2.b About Personal Biography | about.html - Biography section | Done |
| 2.c About Existing Clients | about.html - Existing Clients grid | Done |
| 2.d About Skill Information | about.html - skills table | Done |
| 3.a Portfolio page title | portfolio.html - hero banner | Done |
| 3.b Portfolio Personal Information | portfolio.html - info table | Done |
| 3.c Portfolio Education Information | portfolio.html - education table | Done |
| 3.d Portfolio Special Skill | portfolio.html - skills icons | Done |
| 3.e Portfolio Training & Certification (Bootstrap Modal) | portfolio.html - certificate cards + #certModal1-3 | Done |
| 3.f Portfolio Working Experience | portfolio.html - experience table | Done |
| 4.a Service page title | service.html - hero banner | Done |
| 4.b Service All Service Grid | service.html - service cards | Done |
| 4.c Service Client section | service.html - Clients grid | Done |
| 4.d Service FAQ (5 Q&A, Bootstrap Accordion) | service.html - #faqAccordion | Done |
| 5.a Contact page title | contact.html - hero banner | Done |
| 5.b Contact Direct Contact Info | contact.html - contact icon row | Done |
| 5.c Contact Form (Name/Email/Phone/Address/Message) | contact.html - #contactForm | Done |
| 5.d Contact Google Map | contact.html - iframe embed | Done |
| 5.e Contact form JS validation | js/formValidation.js | Done |
| 6.a Navbar/Footer on all pages + hover effects | all pages - nav/footer, css/custom.css .nav-link:hover | Done |
| 6.b Responsive navbar | all pages - Bootstrap navbar-expand-lg + toggler | Done |
| 6.c Live date & time in footer | js/footer.js - #live-clock | Done |
| 6.d Internal pages linked via navbar | all pages - nav links | Done |
| Tech 1.a HTML5/CSS3/JS + responsive framework | Bootstrap 5 via CDN, all pages | Done |
| Tech 1.b Cross-browser + performance | tested Chrome/Firefox/Edge, lazy-loaded images | Done |
| Tech 2 Design (colors, typography, imagery) | css/custom.css, consistent card/section styling | Done |
| Tech 3.a SEO meta tags + structured data | per-page title/description/og tags + JSON-LD | Done |
| Tech 3.b Indexable/crawlable content | semantic HTML, one h1 per page, alt text on all images | Done |
| Deployment - local server HTTP/HTTPS | README - How to run section | Done |
| Testing 1 Bug/error/compatibility check | manual QA pass across all pages | Done |
| Testing 2 Forms/interactive elements across devices | contact form, carousel, modal, accordion tested responsive | Done |
| Testing 3 Meets requirements | this matrix | Done |
