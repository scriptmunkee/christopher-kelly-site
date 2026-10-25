import { site } from '../data/site';
import { services } from '../data/services';

const strip = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export const personId = `${site.url}/#person`;
export const orgId = `${site.url}/#business`;

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: 'Christopher Kelly',
    jobTitle: site.role,
    url: `${site.url}/`,
    description:
      'Christopher Kelly is a senior, hands-on enterprise AI SEO consultant based in Newcastle upon Tyne, UK, with multi-year SEO and AI search delivery across a global portfolio of 15+ locations.',
    worksFor: { '@id': orgId },
    address: { '@type': 'PostalAddress', addressLocality: 'Newcastle upon Tyne', addressRegion: 'Tyne and Wear', addressCountry: 'GB' },
    knowsAbout: [
      'Enterprise SEO',
      'AI search optimisation',
      'Generative engine optimisation',
      'Entity SEO',
      'Local SEO',
      'Luxury hospitality SEO',
      'SEO automation',
    ],
    ...(site.linkedinUrl ? { sameAs: [site.linkedinUrl] } : {}),
  };
}

export function businessSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': orgId,
    name: 'Christopher Kelly, Enterprise AI SEO Consultant',
    legalName: site.company.legalName,
    url: `${site.url}/`,
    description:
      'Christopher Kelly is an enterprise AI SEO consultant. He gets multi-location and multi-brand businesses understood, cited and recommended by ChatGPT, Gemini, Perplexity, Copilot and Google AI Mode, with senior, hands-on delivery.',
    identifier: { '@type': 'PropertyValue', propertyID: 'Companies House company number', value: site.company.number },
    image: `${site.url}/og.png`,
    founder: { '@id': personId },
    areaServed: [
      { '@type': 'City', name: 'Newcastle upon Tyne' },
      { '@type': 'AdministrativeArea', name: 'North East England' },
      { '@type': 'Country', name: 'United Kingdom' },
      'Worldwide',
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Newcastle upon Tyne', addressRegion: 'Tyne and Wear', addressCountry: 'GB' },
    audience: { '@type': 'BusinessAudience', audienceType: 'Marketing and digital leaders at multi-location and multi-brand enterprises' },
    knowsAbout: [
      'AI search optimisation',
      'Generative engine optimisation (GEO)',
      'Answer engine optimisation (AEO)',
      'LLM visibility',
      'Entity and knowledge graph optimisation',
      'Enterprise SEO',
      'Multi-location SEO',
      'Local SEO',
      'Google Business Profile management',
      'SEO automation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Enterprise AI SEO services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.t, description: s.d, url: `${site.url}/services/#${s.id}` },
      })),
    },
    ...(site.linkedinUrl ? { sameAs: [site.linkedinUrl] } : {}),
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: 'Christopher Kelly',
    publisher: { '@id': personId },
    inLanguage: 'en-GB',
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: strip(i.a) },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; audience?: string }) {
  return {
    '@type': 'Service',
    name: opts.name,
    // Page metas end with a call to action; a schema description shouldn't.
    description: opts.description.replace(/\s*Book a call\.?$/, ''),
    url: `${site.url}${opts.path}`,
    provider: { '@id': orgId },
    areaServed: 'Worldwide',
    ...(opts.audience ? { audience: { '@type': 'BusinessAudience', name: opts.audience } } : {}),
  };
}

export function blogPostingSchema(opts: { title: string; description: string; path: string; published: Date; updated?: Date }) {
  const url = `${site.url}${opts.path}`;
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: opts.title,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    inLanguage: 'en-GB',
    image: `${site.url}/og.png`,
    author: { '@id': personId },
    publisher: { '@id': orgId },
  };
}

export function collectionSchema(opts: { path: string; name: string; items: { title: string; path: string }[] }) {
  return {
    '@type': 'CollectionPage',
    '@id': `${site.url}${opts.path}#page`,
    url: `${site.url}${opts.path}`,
    name: opts.name,
    inLanguage: 'en-GB',
    publisher: { '@id': orgId },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: opts.items.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}${p.path}`, name: p.title })),
    },
  };
}

export function blogIndexSchema(posts: { title: string; path: string }[]) {
  return collectionSchema({ path: '/blog/', name: 'Blog | Christopher Kelly', items: posts });
}

export function caseStudySchema(opts: { title: string; description: string; path: string; published: Date; updated?: Date; about: string[] }) {
  const url = `${site.url}${opts.path}`;
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    articleSection: 'Case studies',
    headline: opts.title,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    inLanguage: 'en-GB',
    image: `${site.url}/og.png`,
    author: { '@id': personId },
    publisher: { '@id': orgId },
    about: opts.about.map((name) => ({ '@type': 'Thing', name })),
  };
}

export function profilePageSchema(opts: { path: string; name: string; description: string; modified: Date }) {
  const url = `${site.url}${opts.path}`;
  return {
    '@type': 'ProfilePage',
    '@id': `${url}#page`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en-GB',
    dateModified: opts.modified.toISOString(),
    mainEntity: { '@id': personId },
    about: { '@id': personId },
    isPartOf: { '@id': `${site.url}/#website` },
  };
}
