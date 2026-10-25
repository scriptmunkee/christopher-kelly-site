// Runs after `astro build`. @astrojs/sitemap writes sitemap-index.xml + sitemap-0.xml;
// this copies the URL set to /sitemap.xml so the conventional path exists too.
// Fails the build if the sitemap is missing or a known page is absent.
import fs from 'node:fs';
import path from 'node:path';
const dist = path.resolve('dist');
const src = path.join(dist, 'sitemap-0.xml');
if (!fs.existsSync(src)) { console.error('sitemap-0.xml missing: did @astrojs/sitemap run?'); process.exit(1); }
const xml = fs.readFileSync(src, 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
// Every built HTML page (except 404) must be in the sitemap.
const missing = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html') {
      const rel = path.relative(dist, path.dirname(p)).split(path.sep).join('/');
      const url = 'https://christopher-kelly.co.uk/' + (rel ? rel + '/' : '');
      if (!urls.includes(url)) missing.push(url);
    }
  }
})(dist);
if (missing.length) { console.error('Pages missing from the sitemap:\n' + missing.join('\n')); process.exit(1); }
fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
