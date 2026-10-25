// Brands shown in the homepage "Trusted by" marquee.
// Only clients Chris has permission to name (confirmed 25 Oct 2026).
// Four Seasons may be named on the banner (Chris, 25 Oct 2026).
// Logos live in public/logos/<slug>.svg (or .png). If the file is missing the
// marquee falls back to the brand name as a text wordmark, so this list is safe
// to ship before every logo has been sourced.
export interface Brand {
  name: string;
  slug: string;
  sector: 'Hospitality' | 'Legal' | 'Dental' | 'Crypto & web3';
  /** Override the default /logos/<slug>.svg path. */
  logo?: string;
  /** Display height in px (default 28). Square or stacked marks need more height to match the wordmarks' visual weight. */
  height?: number;
  /** The file is already a white mark (tonal alpha); skip the mono filter so its internal shapes keep their separation. */
  mono?: boolean;
}

export const brands: Brand[] = [
  { name: 'Four Seasons Hotels and Resorts', slug: 'four-seasons', sector: 'Hospitality', height: 42 },
  { name: 'Stowe Family Law', slug: 'stowe-family-law', sector: 'Legal', height: 42 },
  { name: 'Simpson Millar', slug: 'simpson-millar', sector: 'Legal', height: 40, mono: true },
  { name: 'Fulham Road Dental', slug: 'fulham-road-dental', sector: 'Dental', height: 26 },
  { name: 'Direct Dental', slug: 'direct-dental', sector: 'Dental' },
  { name: 'Bankless', slug: 'bankless', sector: 'Crypto & web3' },
  { name: 'RedStone Finance', slug: 'redstone-finance', sector: 'Crypto & web3' },
  { name: 'Mezo', slug: 'mezo', sector: 'Crypto & web3' },
  { name: 'Thesis', slug: 'thesis', sector: 'Crypto & web3' },
  { name: 'Trojan', slug: 'trojan', sector: 'Crypto & web3', height: 34 },
  { name: 'Crestal', slug: 'crestal', sector: 'Crypto & web3' },
  { name: 'Bando', slug: 'bando', sector: 'Crypto & web3' },
  { name: 'Bity', slug: 'bity', sector: 'Crypto & web3' },
];
