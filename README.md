# christopher-kelly.co.uk

Static Astro site for Christopher Kelly, Enterprise AI SEO Consultant. Hosted on Cloudflare Pages (free tier).

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
Requires Node 22.23.4 or newer (see `.nvmrc`).

## Deploy (Cloudflare Pages)
Every push to `main` deploys automatically.

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `22` |

## Before launch checklist
- [ ] `src/data/site.ts`: booking URL (`calendarUrl`), LinkedIn URL, company number
- [ ] Portrait and about photos (replace the `[PLACEHOLDER]` photo blocks)
- [ ] AI answer screenshots (homepage proof section, hospitality proof section)
- [ ] Case study metrics, charts and quotes
- [ ] Testimonials and mini reviews (real, attributable quotes only)
- [ ] Verify every statistic against its source before publishing
- [ ] `/privacy/`: contact email and date, and review the wording
- [ ] Free tools for the footer (`freeTools` in `site.ts`)

Search the code for `[PLACEHOLDER`, `[CONFIRM`, `[NUMBER]`, `[CONTACT EMAIL]` and `[DATE]` to find every gap.
