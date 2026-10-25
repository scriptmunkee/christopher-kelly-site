import { site } from '../data/site';

// Every page file in the build, as its URL (e.g. "/about/"). Only the keys are read; nothing is imported.
const pageUrls = Object.keys(import.meta.glob('../pages/**/*.astro'))
  .filter((p) => !p.includes('['))
  .map((p) => p.replace('../pages', '').replace(/index\.astro$/, '').replace(/\.astro$/, '/'));

export const pageExists = (href: string) => pageUrls.includes(href);

export type NavKey = 'home' | 'services' | 'work' | 'about' | 'blog';

/**
 * Main navigation: real pages only, no jump links. An item appears only once its page
 * exists, so adding src/pages/about/index.astro is all it takes to put About in the nav and footer.
 */
export const mainNav = [
  { label: 'Services', footLabel: 'Services', href: '/services/', key: 'services' as NavKey },
  { label: 'Work', footLabel: 'Case studies', href: '/case-studies/', key: 'work' as NavKey },
  { label: 'About', footLabel: 'About', href: '/about/', key: 'about' as NavKey },
  ...(site.showBlog ? [{ label: 'Blog', footLabel: 'Blog', href: '/blog/', key: 'blog' as NavKey }] : []),
].filter((l) => pageExists(l.href));
