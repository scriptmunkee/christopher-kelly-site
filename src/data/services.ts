// The six core services. Used on the homepage and the /services/ hub.
// `id` is the anchor on /services/ (e.g. /services/#ai-visibility-audit), so keep ids stable once live.
export const services = [
  { id: 'ai-visibility-audit', t: 'AI Search Visibility Audit', d: "Where you stand across ChatGPT, Gemini, Perplexity, Copilot and Google AI Mode. Which prompts you win, which you lose, and who's taking your place." },
  { id: 'entity-optimisation', t: 'Entity & Knowledge Graph Optimisation', d: 'Make your brand, locations and offers unambiguous to machines. Structured data, Wikidata, profiles and on-site signals that all tell the same story.' },
  { id: 'local-ai-seo', t: 'Multi-location & Local AI SEO', d: 'Google Business Profiles, listings and location pages managed at portfolio scale, so every property is understood and recommended in its own market.' },
  { id: 'content-engineering', t: 'Content Engineering at Scale', d: 'Answer-first pages, FAQ systems and seasonal content built to be cited, then rolled out across properties without losing the brand voice.' },
  { id: 'ai-visibility-measurement', t: 'AI Visibility Measurement', d: 'Mentions vs citations, share of answer, and the traffic and revenue behind them. Reporting leadership can actually act on.' },
  { id: 'ai-ops-automation', t: 'AI Ops & Automation', d: 'n8n, APIs and MCP workflows that actually ship the work: audits, fixes, briefs and reporting that run without a person pushing them.' },
];

// Sector pages. Add a `href` when a sector page exists.
export const sectors = [
  { t: 'Luxury Hospitality & Travel', href: '/services/ai-seo-consultant-hospitality/' },
  { t: 'Multi-Location Brands', href: '' },
  { t: 'Marketplaces & Platforms', href: '' },
];
