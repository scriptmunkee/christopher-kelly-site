import rss from '@astrojs/rss';
import { getPosts } from '../lib/blog';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Christopher Kelly: Blog',
    description: 'AI search statistics, case studies and practical guides from Christopher Kelly, enterprise AI SEO consultant.',
    site: context.site,
    customData: '<language>en-gb</language>',
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
      categories: [p.data.category],
    })),
  });
}
