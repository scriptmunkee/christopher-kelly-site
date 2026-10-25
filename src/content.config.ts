// Blog posts: Markdown files in src/content/blog/. The filename is the URL slug.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** H1 and the title before " | Christopher Kelly". */
    title: z.string(),
    /** Meta description, 160 characters or fewer. */
    description: z.string().max(160),
    /** One or two sentences under the H1 and on the blog cards. */
    standfirst: z.string(),
    category: z.enum(['Statistics', 'Case Studies', 'Guides']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** 3 to 5 answer-first bullets shown at the top of the post. */
    takeaways: z.array(z.string()).min(3).max(5),
    /** Every source cited in the post, shown as a numbered list at the end. */
    sources: z
      .array(z.object({ title: z.string(), publisher: z.string(), date: z.string(), url: z.string().url() }))
      .default([]),
    /** The page the author box links to, by its exact page name. */
    authorLink: z.object({ text: z.string(), href: z.string() }),
    /** Draft posts are not built. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
