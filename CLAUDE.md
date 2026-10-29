# christopher-kelly.co.uk: notes for Claude

Personal site for Christopher Kelly, Enterprise AI SEO Consultant (UK based, working globally).
Operated by Ascend Digital Marketing Ltd. Static Astro site, served by the Cloudflare Worker `christopher-kelly-site` (static assets) and rebuilt by Workers Builds on every push to `main`.
Full infrastructure map, recipes and open items live in the `christopher-kelly-site` skill; keep it and this file in step.

## Workflow
- Edit, run `npm run build` to check it compiles, commit, push to `main`. Cloudflare rebuilds automatically, usually within a minute. Confirm on the live site.
- Never commit secrets. Public client keys only (PostHog `phc_` key, Cloudflare beacon token in `site.ts`). There is no backend, no forms and no database.
- Booking: every "Book my call" button uses `calendarUrl` (TidyCal) in `site.ts`.
- Analytics: Cloudflare Web Analytics beacon for everyone; PostHog (EU) only after consent via `Consent.astro`. Update `/privacy/` whenever a tool, cookie or form is added.
- Keep pages server-rendered HTML. No client-side frameworks; tiny inline scripts only (see `Base.astro`).
- Interactive bits (accordions, FAQs, case studies, mobile menu) use native `<details>/<summary>` so content is in the HTML for crawlers.

## Structure
- `src/data/site.ts`: booking URL, LinkedIn, company number, feature flags. Most "fill this in" items live here.
- `src/data/services.ts`: the six services (ids are `/services/#anchors`, keep them stable) and sector pages.
- `src/layouts/Base.astro`: head, SEO meta, JSON-LD, nav, footer, sticky CTA. Pass `hasBookSection` on any page that renders `BookCall` (`#book`); without it the nav, sticky bar and footer "Book a call" buttons link to TidyCal instead.
- `wrangler.jsonc`: Worker config read by Workers Builds. Serves `404.html` for missing URLs and declares both custom domains; keep the domains listed here or a deploy could drop them.
- `src/lib/nav.ts`: the main nav and footer "Explore" links. Real pages only, never jump links; an item shows only once its page file exists (About appears when `src/pages/about/index.astro` is added). Services has a dropdown of the service pages that exist (any `services.ts` entry with an `href`), plus "All services"; add a one-line blurb for each in `serviceBlurbs`. On mobile they show indented under Services.
- `src/lib/schema.ts`: JSON-LD helpers (Person, ProfessionalService, Service, FAQPage, BreadcrumbList).
- `src/components/`: Nav, Footer, StickyCta, Marquee, Faq, BookCall, Consent (cookie banner and PostHog loader).
- `src/pages/`: `/`, `/services/`, `/about/` (ProfilePage; its facts tables must match the Person schema), `/privacy/`, 404, the hand-built sector pages `/services/ai-seo-consultant-hospitality/` and `-multi-location/`, and `services/[slug].astro`, which builds every other sector page.
- `src/pages/services/seo-ai-visibility-audit.astro`: the first standalone service page. A service gets its own page by adding `href` to its entry in `services.ts`; the homepage, /services/ hub, footer and offer schema then link to it. Link it in-sentence as "SEO and AI visibility audit"; cards use the full name.
- `src/components/SectorPage.astro` + `src/lib/sector.ts`: the shared sector page template and its content type (with the entity icon set). Content lives in `src/data/sectors/<slug>.ts`, registered in `src/data/sectors/index.ts`.
- `src/content/blog/*.md` + `src/content.config.ts`: blog posts (the filename is the URL slug) and their frontmatter rules. `src/lib/blog.ts` sorts posts and works out read time; `src/pages/blog/` holds the hub and the post template; `src/pages/rss.xml.js` the feed.
- `src/content/case-studies/*.md` + `src/lib/caseStudies.ts`: case studies (filename is the slug). `src/pages/case-studies/` holds the hub and the template. The nav "Work" link and footer "Case studies" point to the hub.
- `public/og.png`: the 1200×630 share image used by every page.
- `src/styles/global.css`: the whole design system. Tokens are CSS variables in `:root`.

## Adding a sector page
Copy a content file in `src/data/sectors/` (e.g. `solicitors.ts`), change the content, add it to `src/data/sectors/index.ts`, then add `{ t, href }` to `sectors` in `src/data/services.ts`. The page, footer link, tiles and sitemap entry all follow automatically. Before pushing, check: title before `|` equals the H1, meta under 160 characters, FAQ answers 40 to 70 words, no double or em dashes.

Pattern copied from tom-riley.co.uk: URL `/services/ai-seo-consultant-<sector>/`; title `AI SEO Consultant for <Sector> | Christopher Kelly`; H1 `AI SEO Consultant for <Sector>`; meta `Christopher Kelly is an AI SEO consultant for <audience>. <Promise>. Book a call.` Headings and copy are always our own.

Naming and linking convention (from the tom-riley.co.uk sitemap): every sector page is named "AI SEO Consultant for <Sector>". That exact name is its H1, its title before the `|`, its `t` in `sectors`, and the anchor text wherever it is linked (footer "AI SEO consulting services" column, tiles, lists). Breadcrumbs use the short sector name. Only link pages that exist.

## Adding a blog post
Create `src/content/blog/<slug>.md` with the frontmatter the schema in `src/content.config.ts` requires: title, description (160 characters max), standfirst, category (Statistics, Case Studies or Guides), pubDate, 3 to 5 takeaways, sources (title, publisher, date, URL) and authorLink (a page name and its path). Set `draft: true` to hold a post back. Write answer-first, H2s in Title Case, every statistic linked inline to a dated, named source and labelled when it's a vendor study or non-UK data. Internal links go inside sentences, using page names as anchor text. The hub, sitemap, RSS and schema update automatically.

## Adding a case study
Create `src/content/case-studies/<slug>.md` with the frontmatter in `src/content.config.ts`: headline stats (3 or 4), summary (challenge, approach, result), KPI tiles (number, caption, basis line), an optional `value` model (locations, rates, build hours, hosting, and workflows with runs a year and minutes before and after) and `assumptions`, each marked Documented or Estimate. The template computes every total, ROI, payback and the scale table from `value`, so never type a total into the body; keep the headline and KPI numbers in step with the model. Set `estimated: true` when any figure is modelled, which shows the estimate notice. Name the client only if they are on the permitted list below; otherwise "named on request". Blog posts in the Case Studies category also appear on the hub.

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
- Clients that may be named (Chris confirmed 25 Oct 2026; the full list with logos is `src/data/brands.ts`): Four Seasons Hotels and Resorts (banner logo only; body copy still says "global luxury hotel group, named on request" until Chris says otherwise), Stowe Family Law, Simpson Millar, Breit Biniazan, Fulham Road Dental, Direct Dental, St John & St Elizabeth Hospital (HJE), Iceland Foods, Destinology, Roper Rhodes, Nikura, Perk Clothing, Spaceist, New England Shaving Company, Lewis Brass & Copper, BudMother, Freesoul, Tech Sofa, BannerWorld, Smart UK Supply, More Soda, Hanson Search, UBQ Materials, Sharp Edges, Bankless, RedStone Finance, Bity, Thesis, Mezo, Trojan, Crestal, Bando. Describe only work the record supports; otherwise use [PLACEHOLDER].
- Say "entities", not "signals", for what AI checks.
- FAQ answers: answer-first, 40 to 70 words.
