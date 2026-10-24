# christopher-kelly.co.uk: notes for Claude

Personal site for Christopher Kelly, Enterprise AI SEO Consultant (UK based, working globally).
Operated by Ascend Digital Marketing Ltd. Static Astro site, deployed to Cloudflare Pages on every push to `main`.

## Workflow
- Edit, run `npm run build` to check it compiles, commit, push to `main`. Cloudflare rebuilds automatically.
- Never commit secrets. There is no backend, no forms and no database.
- Keep pages server-rendered HTML. No client-side frameworks; tiny inline scripts only (see `Base.astro`).
- Interactive bits (accordions, FAQs, case studies, mobile menu) use native `<details>/<summary>` so content is in the HTML for crawlers.

## Structure
- `src/data/site.ts`: booking URL, LinkedIn, company number, feature flags. Most "fill this in" items live here.
- `src/data/services.ts`: the six services (ids are `/services/#anchors`, keep them stable) and sector pages.
- `src/layouts/Base.astro`: head, SEO meta, JSON-LD, nav, footer, sticky CTA.
- `src/lib/schema.ts`: JSON-LD helpers (Person, ProfessionalService, Service, FAQPage, BreadcrumbList).
- `src/components/`: Nav, Footer, StickyCta, Marquee, Faq, BookCall.
- `src/pages/`: `/`, `/services/`, `/services/ai-seo-consultant-hospitality/`, `/privacy/`, 404.
- `src/styles/global.css`: the whole design system. Tokens are CSS variables in `:root`.

## Adding a sector page
Copy `src/pages/services/ai-seo-consultant-hospitality.astro`, change the content arrays at the top, then add the page's `href` to `sectors` in `src/data/services.ts`. URL pattern: `/services/ai-seo-consultant-<sector>/`.

## Design system (Signal palette, tom-riley.co.uk layout language)
- Base #F5F2EC with a 44px grid (black 4.5%). Sections alternate white #FFFFFF, stone #FAF8F3, blue-black #0B0F1A. Hairlines black 7%.
- Ink #0B0F1A headings, #1A1F2B button text. Body #444. Greys are AA versions: sublines #6B6B6B, labels #6E6E6E.
- Primary: lime #C6F432 (hover #B8EA1E, press shadow #8FB315, tint #F3FCD6). Tactile press buttons: 8px radius, 0 4px 0 shadow, hover moves down 3px.
- Accent: indigo #3D3BFF (tint #ECEBFF) for tags, numbers, +/−, arrows, links, open states, glows.
- Never use lime as text on light backgrounds. Coloured text on light surfaces is always indigo.
- Montserrat 900 headings (tight tracking), 800 for H3s and buttons; Inter body; JetBrains Mono for prompt examples.
- Content cards square; link tiles 8px radius; FAQ items 12px radius. CTA labels start with 👉.

## Writing rules
- Plain British English. Direct, confident, short sentences, commercially minded. Title Case on H2s.
- Never use double dashes. Avoid em dashes in copy too.
- No hype words. Never write "hidden gem", "nestled" or "oasis".
- Internal links go inside the sentence as natural anchor text, never bolt-on "Read more" or "See more" lines.
- Never invent metrics, quotes or client names. Use [PLACEHOLDER] or [CONFIRM].
- The luxury hotel group is "named on request": do not name the client.
- FAQ answers: answer-first, 40 to 70 words.
