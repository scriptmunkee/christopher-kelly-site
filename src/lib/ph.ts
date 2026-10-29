/**
 * Placeholder guard. Copy marked [PLACEHOLDER…] or [CONFIRM…] is never shown to visitors:
 * templates skip it, and it appears automatically once the real text replaces the marker.
 */
export const isPh = (s?: string | null) => !!s && /\[(PLACEHOLDER|CONFIRM)/i.test(s);
export const real = <T extends string>(items: T[]) => items.filter((s) => !isPh(s));
