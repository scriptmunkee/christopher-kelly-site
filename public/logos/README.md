# Brand logos for the "Trusted by" marquee

Drop one file per brand here, named by the slug in `src/data/brands.ts`:
`stowe-family-law.svg`, `simpson-millar.svg`, `fulham-road-dental.svg`, `direct-dental.svg`,
`bankless.svg`, `redstone-finance.svg`, `mezo.svg`, `thesis.svg`, `trojan.svg`, `crestal.svg`,
`bando.svg`, `bity.svg` (`.png` also works; SVG preferred).

- Use the brand's official logo from its press or brand page. Any colour is fine: the marquee
  renders every logo as a flat white mark on the dark band.
- Horizontal (landscape) lockups work best. Logos display at 28px tall, max 160px wide.
- Trim whitespace around the mark. A square icon-only mark will look small; prefer the wordmark.
- Until a brand's file exists, the marquee shows its name as text, so partial sets ship fine.

Sourced 25 Oct 2026 from each brand's own site (header logo or docs site). Stowe's roundel is
cropped to the mark and wordmark; Simpson Millar is the site's PNG upscaled by their image CDN.
Square or stacked marks carry a `height` override in `src/data/brands.ts`.
