export const JOBS = [
  'assassin',
  'duke',
  'ambassador',
  'captain',
  'contessa',
] as const;

export type Job = (typeof JOBS)[number];
