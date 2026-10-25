// Brands shown in the homepage "Trusted by" marquee.
// Only clients Chris has permission to name (confirmed 25 Oct 2026).
// The luxury hotel group is never named here; it appears as an anonymised line.
// Logos live in public/logos/<slug>.svg (or .png). If the file is missing the
// marquee falls back to the brand name as a text wordmark, so this list is safe
// to ship before every logo has been sourced.
export interface Brand {
  name: string;
  slug: string;
  sector: 'Legal' | 'Dental' | 'Crypto & web3';
  /** Override the default /logos/<slug>.svg path. */
  logo?: string;
}

export const brands: Brand[] = [
  { name: 'Stowe Family Law', slug: 'stowe-family-law', sector: 'Legal' },
  { name: 'Simpson Millar', slug: 'simpson-millar', sector: 'Legal' },
  { name: 'Fulham Road Dental', slug: 'fulham-road-dental', sector: 'Dental' },
  { name: 'Direct Dental', slug: 'direct-dental', sector: 'Dental' },
  { name: 'Bankless', slug: 'bankless', sector: 'Crypto & web3' },
  { name: 'RedStone Finance', slug: 'redstone-finance', sector: 'Crypto & web3' },
  { name: 'Mezo', slug: 'mezo', sector: 'Crypto & web3' },
  { name: 'Thesis', slug: 'thesis', sector: 'Crypto & web3' },
  { name: 'Trojan', slug: 'trojan', sector: 'Crypto & web3' },
  { name: 'Crestal', slug: 'crestal', sector: 'Crypto & web3' },
  { name: 'Bando', slug: 'bando', sector: 'Crypto & web3' },
  { name: 'Bity', slug: 'bity', sector: 'Crypto & web3' },
];

/** Anonymised client shown alongside the logos. */
export const anonymisedClient = 'Global luxury hotel group, named on request';
