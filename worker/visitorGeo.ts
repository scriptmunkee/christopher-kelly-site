/**
 * Coarse visitor location for analytics, derived from Cloudflare.
 *
 * Source order: the zone's "Add visitor location headers" managed transform
 * (cf-ipcountry, cf-region, cf-ipcity, ...) first, then the Worker's own
 * `request.cf` as a fallback. Both come from Cloudflare's edge IP lookup; the
 * visitor's IP address itself is never read, returned or stored.
 *
 * Deliberately coarse: country, nation/region, city and the UK postcode AREA
 * (letters only, e.g. "TS"). Never the full or outward postcode, lat/long or
 * timezone. Same shape as companimal.co.uk so both sites share one set of
 * `visitor_*` properties in the shared PostHog project.
 */

export interface VisitorGeo {
  visitor_country?: string;
  visitor_region?: string;
  visitor_region_code?: string;
  visitor_city?: string;
  visitor_postcode_area?: string;
}

/** Subset of Cloudflare's IncomingRequestCfProperties that we read. */
export interface CloudflareCf {
  country?: string | null;
  region?: string | null;
  regionCode?: string | null;
  city?: string | null;
  postalCode?: string | null;
}

// Cloudflare placeholders that mean "no real country": XX = unknown, T1 = Tor.
const UNKNOWN_COUNTRIES = new Set(['XX', 'T1']);
const MAX_LEN = 80;

function clean(value: string | null | undefined): string | undefined {
  if (value == null) return undefined;
  const v = String(value).trim();
  if (!v) return undefined;
  return v.length > MAX_LEN ? v.slice(0, MAX_LEN) : v;
}

/** Letters-only postcode area from a UK postcode or outward code ("TS1" → "TS"). */
export function postcodeArea(postal: string | null | undefined): string | undefined {
  const match = clean(postal)?.toUpperCase().match(/^([A-Z]{1,2})\d/);
  return match?.[1];
}

export function extractVisitorGeo(headers: Headers, cf?: CloudflareCf | null): VisitorGeo {
  const h = (name: string) => clean(headers.get(name));

  const rawCountry = (h('cf-ipcountry') ?? clean(cf?.country))?.toUpperCase();
  const country = rawCountry && !UNKNOWN_COUNTRIES.has(rawCountry) ? rawCountry : undefined;
  // Without a real country the rest is unreliable (Tor, unknown ranges).
  if (!country) return {};

  const geo: VisitorGeo = {
    visitor_country: country,
    visitor_region: h('cf-region') ?? clean(cf?.region),
    visitor_region_code: h('cf-region-code') ?? clean(cf?.regionCode),
    visitor_city: h('cf-ipcity') ?? clean(cf?.city),
  };
  if (country === 'GB') {
    geo.visitor_postcode_area = postcodeArea(headers.get('cf-postal-code') ?? cf?.postalCode);
  }

  return Object.fromEntries(Object.entries(geo).filter(([, v]) => v !== undefined)) as VisitorGeo;
}
