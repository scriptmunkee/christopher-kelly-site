# Brand logos for the "Trusted by" marquee

One file per brand, named by the slug in `src/data/brands.ts` (`.svg` preferred, `.png` accepted).

- Use the brand's official logo from its press or brand page. Any colour is fine: the marquee
  renders every logo as a flat white mark on the dark band.
- Horizontal (landscape) lockups work best. Logos display at 28px tall, max 160px wide.
- Trim whitespace around the mark. A square icon-only mark will look small; prefer the wordmark.
- Until a brand's file exists, the marquee shows its name as text, so partial sets ship fine.
Sourced 25 Oct 2026 from each brand's own site (header logo, docs site or app bundle).
Edits made: Stowe's roundel cropped to the mark and wordmark; Simpson Millar rebuilt as a
tonal white PNG (`mono: true`) so its three triangles stay distinct; Tech Sofa's white
background keyed out; Hanson Search cropped to drop the B Corp badge; Freesoul rotated from
its vertical lockup; Iceland and Bankless extracted from SVG sprites; Four Seasons, Stowe,
Roper Rhodes and Spaceist fetched through the browser because their CDNs block servers.
Still missing: UBQ (site not identified) and Sharp Edges (sharpedgesok.com does not resolve);
both show as text until a file is added.
