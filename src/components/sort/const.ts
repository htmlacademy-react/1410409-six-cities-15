const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
] as const;

const SORT_TYPE_DEFAULT: SortType = SORT_TYPES[0];

export type SortType = typeof SORT_TYPES[number];

export {SORT_TYPES, SORT_TYPE_DEFAULT};
