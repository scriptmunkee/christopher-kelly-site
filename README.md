# christopher-kelly.co.uk

Static Astro site for Christopher Kelly, Enterprise AI SEO Consultant. Served by a Cloudflare Worker with static assets (free tier).

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
Requires Node 22.23.4 or newer (see `.nvmrc`).

## Deploy (Cloudflare Workers Builds)
Every push to `main` deploys automatically to the Worker `christopher-kelly-site`, which serves `dist/` as static assets on `christopher-kelly.co.uk` and `www` (www redirects to the root). If a push doesn't go live, check that the Cloudflare GitHub app still has access to this repo.

## Before launch checklist
- [x] Booking URL (`calendarUrl`, TidyCal)
- [ ] `src/data/site.ts`: LinkedIn URL
- [ ] Portrait and about photos (replace the `[PLACEHOLDER]` photo blocks)
- [ ] AI answer screenshots (homepage proof section, hospitality proof section)
- [ ] Case study metrics, charts and quotes
- [ ] Testimonials and mini reviews (real, attributable quotes only)
- [ ] Verify every statistic against its source before publishing
- [x] `/privacy/`: contact email and date
- [ ] `/privacy/`: review the wording
- [ ] Free tools for the footer (`freeTools` in `site.ts`)

Search the code for `[PLACEHOLDER`, `[CONFIRM`, `[NUMBER]`, `[CONTACT EMAIL]` and `[DATE]` to find every gap.
