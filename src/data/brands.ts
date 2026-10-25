// Brands shown in the homepage "Trusted by" marquee.
// Only clients Chris has said may be named (lists confirmed 25 Oct 2026).
// Logos live in public/logos/<slug>.svg (or .png). If the file is missing the
// marquee falls back to the brand name as a text wordmark, so this list is safe
// to ship before every logo has been sourced.
export interface Brand {
  name: string;
  slug: string;
  sector: string;
  /** Override the default /logos/<slug>.svg path. */
  logo?: string;
  /** Display height in px (default 28). Square or stacked marks need more height to match the wordmarks' visual weight. */
  height?: number;
  /** The file is already a white mark (tonal alpha); skip the mono filter so its internal shapes keep their separation. */
  mono?: boolean;
}

export const brands: Brand[] = [
  // Hospitality and healthcare
  { name: 'Four Seasons Hotels and Resorts', slug: 'four-seasons', sector: 'Hospitality', height: 42 },
  { name: 'Destinology', slug: 'destinology', sector: 'Travel', height: 30 },
  { name: 'St John & St Elizabeth Hospital', slug: 'hje', sector: 'Healthcare', height: 36 },
  { name: 'Iceland Foods', slug: 'iceland', sector: 'Retail', height: 26 },
  // Legal
  { name: 'Stowe Family Law', slug: 'stowe-family-law', sector: 'Legal', height: 42 },
  { name: 'Simpson Millar', slug: 'simpson-millar', sector: 'Legal', height: 40, mono: true },
  { name: 'Breit Biniazan', slug: 'breit-biniazan', sector: 'Legal', height: 34 },
  // Dental
  { name: 'Fulham Road Dental', slug: 'fulham-road-dental', sector: 'Dental', height: 26 },
  { name: 'Direct Dental', slug: 'direct-dental', sector: 'Dental' },
  // E-commerce and consumer
  { name: 'Roper Rhodes', slug: 'roper-rhodes', sector: 'E-commerce', height: 20 },
  { name: 'Nikura', slug: 'nikura', sector: 'E-commerce', height: 22 },
  { name: 'Perk Clothing', slug: 'perk-clothing', sector: 'E-commerce', height: 30 },
  { name: 'Spaceist', slug: 'spaceist', sector: 'E-commerce', height: 32 },
  { name: 'New England Shaving Company', slug: 'new-england-shaving', sector: 'E-commerce', height: 30 },
  { name: 'Lewis Brass & Copper', slug: 'lewis-brass', sector: 'E-commerce', height: 34 },
  { name: 'BudMother', slug: 'budmother', sector: 'E-commerce', height: 34 },
  { name: 'Freesoul', slug: 'freesoul', sector: 'E-commerce', height: 24 },
  { name: 'Tech Sofa', slug: 'tech-sofa', sector: 'E-commerce', height: 28 },
  { name: 'BannerWorld', slug: 'bannerworld', sector: 'E-commerce', height: 32 },
  { name: 'Smart UK Supply', slug: 'smart-uk', sector: 'E-commerce', height: 30 },
  // Agencies and B2B
  { name: 'More Soda', slug: 'more-soda', sector: 'Agency', height: 22 },
  { name: 'Hanson Search', slug: 'hanson-search', sector: 'Recruitment', height: 34 },
  // Crypto and web3
  { name: 'Bankless', slug: 'bankless', sector: 'Crypto & web3' },
  { name: 'RedStone Finance', slug: 'redstone-finance', sector: 'Crypto & web3' },
  { name: 'Mezo', slug: 'mezo', sector: 'Crypto & web3' },
  { name: 'Thesis', slug: 'thesis', sector: 'Crypto & web3' },
  { name: 'Trojan', slug: 'trojan', sector: 'Crypto & web3', height: 34 },
  { name: 'Crestal', slug: 'crestal', sector: 'Crypto & web3' },
  { name: 'Bando', slug: 'bando', sector: 'Crypto & web3' },
  { name: 'Bity', slug: 'bity', sector: 'Crypto & web3' },
  // Materials and services
  { name: 'UBQ Materials', slug: 'ubq', sector: 'Materials', height: 30 },
  { name: 'Sharp Edges', slug: 'sharp-edges', sector: 'Services', height: 36 },
];
