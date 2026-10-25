import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const categories = ['Statistics', 'Case Studies', 'Guides'] as const;
export const categoryId = (c: string) => c.toLowerCase().replace(/\s+/g, '-');

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Minutes to read at about 220 words a minute. */
export function readingTime(body = ''): number {
  const words = body.replace(/[#>*_`|\-\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const formatDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export const blogCover = [
  { e: '🤖', t: 'How AI describes you today', p: 'What ChatGPT and Google AI say about your brand.' },
  { e: '🔎', t: 'Who gets named instead', p: 'The questions where a competitor wins.' },
  { e: '🧠', t: 'Entity gaps', p: 'Where machines get confused about who you are.' },
  { e: '📍', t: 'Location data health', p: 'Drift across your site, profiles and listings.' },
  { e: '📊', t: 'What to measure', p: 'Mentions, citations and the revenue behind them.' },
  { e: '🗺️', t: "What I'd fix first", p: 'A short, prioritised list.' },
];
