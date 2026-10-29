// The six core services. Used on the homepage and the /services/ hub.
// `id` is the anchor on /services/ (e.g. /services/#ai-visibility-audit), so keep ids stable once live.
// `href` is set once a service has its own page; the homepage, /services/, footer and schema link to it.
export const services: { id: string; t: string; d: string; href?: string }[] = [
  { id: 'ai-visibility-audit', t: 'Enterprise SEO and AI Visibility Audit', href: '/services/seo-ai-visibility-audit/', d: "Where you stand across Google, ChatGPT, Gemini, Perplexity, Copilot and Google AI Mode. Which questions you win, which you lose, who's taking your place and what to fix first." },
  { id: 'entity-optimisation', t: 'Entity & Knowledge Graph Optimisation', d: 'Make your brand, locations and offers unambiguous to machines. Structured data, Wikidata, profiles and on-site entities that all tell the same story.' },
  { id: 'local-ai-seo', t: 'Multi-location & Local AI SEO', d: 'Google Business Profiles, listings and location pages managed at portfolio scale, so every property is understood and recommended in its own market.' },
  { id: 'content-engineering', t: 'Content Engineering at Scale', d: 'Answer-first pages, FAQ systems and seasonal content built to be cited, then rolled out across properties without losing the brand voice.' },
  { id: 'ai-visibility-measurement', t: 'AI Visibility Measurement', d: 'Mentions vs citations, share of answer, and the traffic and revenue behind them. Reporting leadership can actually act on.' },
  { id: 'ai-ops-automation', t: 'AI Ops & Automation', d: 'n8n, APIs and MCP workflows that actually ship the work: audits, fixes, briefs and reporting that run without a person pushing them.' },
];

// Sector pages. Add a `href` when a sector page exists.
// Sector pages. `t` is the page's exact name (its H1 and title before the |) and is
// the anchor text everywhere the page is linked. Leave href '' until the page exists.
export const sectors = [
  { t: 'AI SEO Consultant for Hospitality', href: '/services/ai-seo-consultant-hospitality/' },
  { t: 'AI SEO Consultant for Multi-Location Brands', href: '/services/ai-seo-consultant-multi-location/' },
  { t: 'AI SEO Consultant for Solicitors', href: '/services/ai-seo-consultant-solicitors/' },
  { t: 'AI SEO Consultant for Fintech', href: '/services/ai-seo-consultant-fintech/' },
  { t: 'AI SEO Consultant for Dentists', href: '/services/ai-seo-consultant-dentists/' },
  { t: 'AI SEO Consultant for Insurance', href: '/services/ai-seo-consultant-insurance/' },
  { t: 'AI SEO Consultant for Tech Startups', href: '/services/ai-seo-consultant-tech-startups/' },
  { t: 'AI SEO Consultant for Startups', href: '/services/ai-seo-consultant-startups/' },
  { t: 'AI SEO Consultant for Medical & Healthcare', href: '/services/ai-seo-consultant-medical/' },
  { t: 'AI SEO Consultant for E-commerce', href: '/services/ai-seo-consultant-ecommerce/' },
  { t: 'AI SEO Consultant for SaaS', href: '/services/ai-seo-consultant-saas/' },
  { t: 'AI SEO Consultant for Trades & Home Services', href: '/services/ai-seo-consultant-trades/' },
  { t: 'AI SEO Consultant for Construction', href: '/services/ai-seo-consultant-construction/' },
  { t: 'AI SEO Consultant for Local Services', href: '/services/ai-seo-consultant-local-services/' },
  { t: 'AI SEO Consultant for Marketplaces', href: '' },
];
