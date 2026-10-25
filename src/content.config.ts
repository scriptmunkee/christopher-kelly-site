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

// Case studies: Markdown files in src/content/case-studies/. The filename is the URL slug.
// The value model lives in frontmatter so the page can show its working and every total is computed, never typed.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    /** H1 and the title before " | Christopher Kelly". */
    title: z.string(),
    /** Meta description, 160 characters or fewer. */
    description: z.string().max(160),
    /** One or two sentences under the H1 and on the hub cards. */
    standfirst: z.string(),
    /** Short type label, e.g. "AI Ops Automation". */
    eyebrow: z.string(),
    /** Client name, only if on the permitted list in CLAUDE.md; otherwise "Named on request". */
    client: z.string(),
    sector: z.string(),
    scope: z.string(),
    period: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** True when any figure on the page is modelled rather than measured. Shows the estimate notice. */
    estimated: z.boolean().default(false),
    /** 3 or 4 big numbers in the hero. Keep them in step with the value model. */
    headline: z.array(z.object({ n: z.string(), l: z.string() })).min(3).max(4),
    summary: z.object({ challenge: z.string(), approach: z.string(), result: z.string() }),
    /** KPI tiles: number, caption, basis line. */
    kpis: z.array(z.object({ n: z.string(), c: z.string(), s: z.string() })).min(4).max(12),
    /** Optional time-and-money model. Totals, ROI, payback and the scale table are computed from it. */
    value: z
      .object({
        locations: z.number(),
        entities: z.number(),
        costRate: z.number(),
        billRate: z.number(),
        buildHours: z.number(),
        runCostYear: z.number(),
        fteHours: z.number().default(1650),
        scale: z.array(z.number()).default([50, 150, 500]),
        workflows: z.array(
          z.object({ name: z.string(), what: z.string(), runs: z.number(), runsBasis: z.string(), beforeMins: z.number(), afterMins: z.number() }),
        ),
      })
      .optional(),
    /** Every input behind the numbers, marked Documented or Estimate. */
    assumptions: z.array(z.object({ item: z.string(), value: z.string(), basis: z.enum(['Documented', 'Estimate']) })).default([]),
    stack: z.array(z.string()).default([]),
    sources: z
      .array(z.object({ title: z.string(), publisher: z.string(), date: z.string(), url: z.string().url() }))
      .default([]),
    /** The page the author box links to, by its exact page name. */
    authorLink: z.object({ text: z.string(), href: z.string() }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, caseStudies };
