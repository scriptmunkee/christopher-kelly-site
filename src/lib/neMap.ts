// Draws the North East map used on the location pages, at build time. No client code and no
// third-party requests: the coastline comes from Natural Earth (world-atlas, 1:10m) and is
// projected to an SVG path here.
import { geoArea, geoBounds, geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import land from 'world-atlas/land-10m.json';

export const W = 560;
export const H = 520;

// Map frame: roughly Alnwick to Northallerton, Hexham to the coast.
const frame = {
  type: 'Feature',
  geometry: { type: 'MultiPoint', coordinates: [[-2.25, 54.35], [-0.95, 55.2]] },
} as const;

const projection = geoMercator()
  .fitExtent([[24, 24], [W - 24, H - 24]], frame as any)
  .clipExtent([[0, 0], [W, H]]);

// Keep only the land near the frame, and make sure every polygon winds the way d3 expects
// (a polygon bigger than a hemisphere has been read inside out, so its rings are reversed).
const all = feature(land as any, (land as any).objects.land) as any;
const polys: any[] = (all.geometry?.coordinates ?? all.features?.flatMap((f: any) => f.geometry.coordinates) ?? [])
  .map((rings: any) => ({ type: 'Polygon', coordinates: rings }))
  .map((poly: any) => (geoArea(poly) > 2 * Math.PI ? { ...poly, coordinates: poly.coordinates.map((r: any) => [...r].reverse()) } : poly))
  .filter((poly: any) => {
    const [[x0, y0], [x1, y1]] = geoBounds(poly);
    return x1 > -3.5 && x0 < 0.5 && y1 > 53.5 && y0 < 56;
  });
const landGeo = { type: 'MultiPolygon', coordinates: polys.map((p) => p.coordinates) };
export const landPath = geoPath(projection)(landGeo as any) ?? '';

export const places: Record<string, { label: string; lon: number; lat: number; dx?: number; dy?: number; anchor?: 'start' | 'end' }> = {
  newcastle: { label: 'Newcastle', lon: -1.6178, lat: 54.9783, dx: -10, dy: -12, anchor: 'end' },
  gateshead: { label: 'Gateshead', lon: -1.6034, lat: 54.9527, dx: -10, dy: 18, anchor: 'end' },
  sunderland: { label: 'Sunderland', lon: -1.3838, lat: 54.9069, dx: 12, dy: 5 },
  durham: { label: 'Durham', lon: -1.5733, lat: 54.7761, dx: -12, dy: 5, anchor: 'end' },
  middlesbrough: { label: 'Middlesbrough', lon: -1.235, lat: 54.5742, dx: 12, dy: 5 },
  darlington: { label: 'Darlington', lon: -1.5595, lat: 54.5236, dx: -12, dy: 5, anchor: 'end' },
};

export const xy = (lon: number, lat: number) => {
  const p = projection([lon, lat]) ?? [0, 0];
  return { x: Math.round(p[0] * 10) / 10, y: Math.round(p[1] * 10) / 10 };
};

