/**
 * Worker entry for christopher-kelly.co.uk.
 *
 * The site is static assets. This script only runs for `/_geo` (see
 * `run_worker_first` in wrangler.jsonc); every other request is served
 * straight from the assets, exactly as before, and never reaches this code.
 *
 * GET /_geo returns the visitor's coarse location (see visitorGeo.ts). The
 * consent-gated PostHog loader in Consent.astro fetches it once per page load
 * and adds it to events as `visitor_*` properties. Never cached; no cookies.
 */
import { extractVisitorGeo, type CloudflareCf } from './visitorGeo';

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/_geo') {
      const cf = (request as Request & { cf?: CloudflareCf }).cf;
      return new Response(JSON.stringify(extractVisitorGeo(request.headers, cf)), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'private, no-store, max-age=0',
          'cdn-cache-control': 'no-store',
          'x-robots-tag': 'noindex',
        },
      });
    }

    // Safety net: anything else that reaches the script goes to the assets.
    return env.ASSETS.fetch(request);
  },
};
