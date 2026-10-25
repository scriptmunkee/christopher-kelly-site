// Shared shape for sector pages built with src/components/SectorPage.astro.
// Each sector's content lives in src/data/sectors/<slug>.ts and is registered in
// src/data/sectors/index.ts. Fields marked Html may contain inline links (<a class="inl">),
// <strong> or <br>; everything else is plain text.
import { site } from '../data/site';

type Html = string;

/** Base URL of the services page, for in-sentence links to service anchors. */
export const S = `${site.url}/services/`;

const svg = (d: string) =>
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

/** Line icons for the entity tiles. */
export const icons = {
  tag: svg('<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle>'),
  scales: svg('<path d="M12 3v18M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0zM8 21h8"></path>'),
  person: svg('<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>'),
  pin: svg('<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>'),
  doc: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path d="M14 3v6h6M8 13h8M8 17h5"></path>'),
  award: svg('<circle cx="12" cy="9" r="6"></circle><path d="M8.5 14L7 22l5-3 5 3-1.5-8"></path>'),
  star: svg('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"></path>'),
  shield: svg('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path><path d="M9 12l2 2 4-4"></path>'),
  card: svg('<rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20M6 15h4"></path>'),
  percent: svg('<path d="M19 5L5 19"></path><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>'),
  chart: svg('<path d="M4 19h16M6 15V9M10 15V5M14 15v-4M18 15V7"></path>'),
  lock: svg('<rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path>'),
  profile: svg('<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18M8 14h4"></path>'),
  list: svg('<path d="M8 6h13M8 12h13M8 18h13"></path><circle cx="4" cy="6" r="1"></circle><circle cx="4" cy="12" r="1"></circle><circle cx="4" cy="18" r="1"></circle>'),
  code: svg('<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14"></path>'),
  shop: svg('<path d="M3 9l1.5-5h15L21 9M3 9h18v11H3zM9 20v-6h6v6"></path>'),
  tooth: svg('<path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 5 2.5 8.5.6 2.2 1 5 2.5 5s1.6-3 2.2-5c.4-1.2 1.2-1.2 1.6 0 .6 2 .7 5 2.2 5s1.9-2.8 2.5-5C17.5 12.5 21 10.5 21 7.5 21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z"></path>'),
  plug: svg('<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"></path>'),
  home: svg('<path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"></path>'),
  tool: svg('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"></path>'),
  rocket: svg('<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 12a12 12 0 0 1 11-9 12 12 0 0 1-9 11l-3 1-1-1z"></path><circle cx="15" cy="9" r="1.5"></circle>'),
  heart: svg('<path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z"></path><path d="M8 11h2l1-2 2 4 1-2h2"></path>'),
  calendar: svg('<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>'),
  crane: svg('<path d="M4 21V5l8-2 8 3M4 7h16M12 3v4M18 7v6M16 13h4v3h-4zM2 21h10"></path>'),
  box: svg('<path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"></path>'),
} as const;

export type IconName = keyof typeof icons;

export interface SectorPageData {
  /** URL slug under /services/, e.g. 'ai-seo-consultant-dentists'. */
  slug: string;
  /** Exact page name: the H1, the title before the |, and the anchor text everywhere. */
  name: string;
  /** Short sector name for the breadcrumb. */
  crumb: string;
  description: string;
  eyebrow: string;
  heroSub: string;
  heroBody: Html;
  aiCard: { label: string; prompt: string; answer: Html; tag: string };
  marquee: string[];
  intro: { lead: string; body: Html[] };
  shiftH2: string;
  shifts: { t: string; p: string }[];
  stats: { n: string; c: string; s: string }[];
  entitiesH2: Html;
  entities: { icon: IconName; t: string; p: string }[];
  mid: { h: string; p: string };
  playH2: Html;
  steps: { emoji: string; t: string; p: Html; tag: string }[];
  decidesEyebrow: string;
  decidesH2: Html;
  decides: { t: string; p: string }[];
  pagesH2: string;
  pagesSub: string;
  pageTypes: { t: string; c: string; p: string }[];
  govH2: Html;
  governance: string[];
  govCta: string;
  about: Html[];
  proofH2: Html;
  cases: { label: string; t: string; p: string; m: string }[];
  /** Optional plain sentence under the proof cards. */
  proofLine?: string;
  faqH2: string;
  faqs: { q: string; a: Html }[];
  book: { heading: Html; sub: string; cover: { e: string; t: string; p: string }[] };
  service: { name: string; audience: string };
}
