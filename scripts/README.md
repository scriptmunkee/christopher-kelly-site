# scripts

`og.html` + `og.mjs` render `public/og.png` (1200×630 share image). Run `node scripts/og.mjs` after editing `og.html` or swapping the portrait. Needs Playwright with Chromium; if it is not a local dependency set `PLAYWRIGHT_PKG` to its install path.

`sitemap.mjs` runs as part of `npm run build`: copies the @astrojs/sitemap output to `dist/sitemap.xml` and fails the build if any built page is missing from it.
