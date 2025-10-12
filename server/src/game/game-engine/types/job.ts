export const JOBS = ['공작', '대사', '암살자', '사령관', '백작부인'] as const;

export type Job = (typeof JOBS)[number];
