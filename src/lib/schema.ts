import { site } from '../data/site';

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
    worksFor: { '@id': orgId },
    address: { '@type': 'PostalAddress', addressRegion: 'County Durham', addressCountry: 'GB' },
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
    founder: { '@id': personId },
    areaServed: 'Worldwide',
    address: { '@type': 'PostalAddress', addressRegion: 'County Durham', addressCountry: 'GB' },
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
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { '@id': orgId },
    areaServed: 'Worldwide',
    ...(opts.audience ? { audience: { '@type': 'BusinessAudience', name: opts.audience } } : {}),
  };
}
