import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { writeFileSync } from 'node:fs';

/**
 * Writes dist/_redirects after every build. Cloudflare applies these before serving assets:
 * - /sitemap.xml permanently redirects to the sitemap index, since many tools and crawlers ask for it.
 * - Every page without its trailing slash gets a permanent 301 to the slashed URL. Cloudflare's own
 *   trailing-slash handling only sends a temporary 307.
 */
function redirects() {
  return {
    name: 'ck-redirects',
    hooks: {
      'astro:build:done': ({ dir, pages }) => {
        const lines = ['/sitemap.xml /sitemap-index.xml 301'];
        for (const { pathname } of pages) {
          if (!pathname || !pathname.endsWith('/') || pathname.startsWith('404')) continue;
          lines.push(`/${pathname.slice(0, -1)} /${pathname} 301`);
        }
        writeFileSync(new URL('_redirects', dir), lines.join('\n') + '\n');
      },
    },
  };
}

export default defineConfig({
  site: 'https://christopher-kelly.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    redirects(),
  ],
});
