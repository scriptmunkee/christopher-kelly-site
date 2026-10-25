// Renders public/og.png (1200×630) from scripts/og.html. Run: node scripts/og.mjs
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_PKG ?? 'playwright'); // playwright is a global install, not a site dependency
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const here = path.dirname(fileURLToPath(import.meta.url));
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.goto('file://' + path.join(here, 'og.html'));
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(300);
await p.screenshot({ path: path.join(here, '..', 'public', 'og.png') });
await b.close();
console.log('wrote public/og.png');
