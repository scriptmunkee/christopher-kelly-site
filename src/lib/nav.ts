import { site } from '../data/site';
import { services } from '../data/services';

// Every page file in the build, as its URL (e.g. "/about/"). Only the keys are read; nothing is imported.
const pageUrls = Object.keys(import.meta.glob('../pages/**/*.astro'))
  .filter((p) => !p.includes('['))
  .map((p) => p.replace('../pages', '').replace(/index\.astro$/, '').replace(/\.astro$/, '/'));

export const pageExists = (href: string) => pageUrls.includes(href);

export type NavKey = 'home' | 'services' | 'work' | 'about' | 'blog';

export type NavChild = { label: string; desc: string; href: string };

// Short lines shown under each service page in the Services dropdown. Add one when a service gets a page.
const serviceBlurbs: Record<string, string> = {
  'ai-visibility-audit': 'What AI says about your brand, why, and what to fix first.',
};

/** Service pages that exist, for the Services dropdown. A service joins it once its `href` is set in services.ts. */
export const serviceChildren: NavChild[] = services
  .filter((s) => s.href && pageExists(s.href))
  .map((s) => ({ label: s.t, desc: serviceBlurbs[s.id] ?? s.d, href: s.href as string }));

/**
 * Main navigation: real pages only, no jump links. An item appears only once its page
 * exists, so adding src/pages/about/index.astro is all it takes to put About in the nav and footer.
 */
export const mainNav: { label: string; footLabel: string; href: string; key: NavKey; children?: NavChild[] }[] = [
  { label: 'Services', footLabel: 'Services', href: '/services/', key: 'services' as NavKey, children: serviceChildren },
  { label: 'Work', footLabel: 'Case studies', href: '/case-studies/', key: 'work' as NavKey },
  { label: 'About', footLabel: 'About', href: '/about/', key: 'about' as NavKey },
  ...(site.showBlog ? [{ label: 'Blog', footLabel: 'Blog', href: '/blog/', key: 'blog' as NavKey }] : []),
].filter((l) => pageExists(l.href));
