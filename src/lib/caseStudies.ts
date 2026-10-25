import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudy = CollectionEntry<'caseStudies'>;
type Value = NonNullable<CaseStudy['data']['value']>;

/** Published case studies, newest first. */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const items = await getCollection('caseStudies', (c) => !c.data.draft);
  return items.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

const nf = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });
export const num = (n: number) => nf.format(Math.round(n));
export const gbp = (n: number) => `£${nf.format(Math.round(n))}`;
/** £28,350 → £28k, £945,000 → £945k, £1,250,000 → £1.3m */
export const gbpShort = (n: number) =>
  n >= 1_000_000 ? `£${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}m` : n >= 1000 ? `£${Math.round(n / 1000)}k` : gbp(n);
export const mins = (m: number) => (m >= 60 ? `${+(m / 60).toFixed(1)} hrs` : `${m} min`);

/** Works the value model through. Every total on a case study page comes from here. */
export function valueModel(v: Value) {
  const rows = v.workflows.map((w) => {
    const hours = (w.runs * (w.beforeMins - w.afterMins)) / 60;
    return { ...w, hours, cost: hours * v.costRate, capacity: hours * v.billRate, faster: 1 - w.afterMins / w.beforeMins };
  });
  const hours = rows.reduce((t, r) => t + r.hours, 0);
  const beforeHours = rows.reduce((t, r) => t + (r.runs * r.beforeMins) / 60, 0);
  const cost = hours * v.costRate;
  const capacity = hours * v.billRate;
  const yearOneCost = v.buildHours * v.costRate + v.runCostYear;
  const net = cost - yearOneCost;
  const roi = (net / yearOneCost) * 100;
  const paybackWeeks = yearOneCost / (cost / 52);
  const fte = hours / v.fteHours;
  const perLocation = hours / v.locations;
  const scale = [v.locations, ...v.scale].map((n) => {
    const h = perLocation * n;
    return { n, hours: h, cost: h * v.costRate, capacity: h * v.billRate, fte: h / v.fteHours, current: n === v.locations };
  });
  return { rows, hours, beforeHours, cut: hours / beforeHours, cost, capacity, yearOneCost, net, roi, paybackWeeks, fte, perLocation, scale };
}

export const caseCover = [
  { e: '⏱️', t: 'Where the hours go', p: 'The repetitive SEO and listings work worth automating.' },
  { e: '📍', t: 'Location data health', p: 'Drift across your site, profiles and listings.' },
  { e: '🔁', t: 'What can write back', p: 'Fixes your listings platform can take by API.' },
  { e: '✅', t: 'Where people stay in', p: 'The approval steps that keep it safe.' },
  { e: '💷', t: 'What it is worth', p: 'Hours, cost and payback for your portfolio.' },
  { e: '🗺️', t: "What I'd automate first", p: 'A short, prioritised list.' },
];
