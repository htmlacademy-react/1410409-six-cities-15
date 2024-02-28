const CARDS_COUNT = 5;
const OFFERS_COUNT = 153;

const CITY_NAMES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const OFFER_TYPES = [
  'hotel',
  'house',
  'apartment',
  'room',
] as const;

const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {CARDS_COUNT, OFFERS_COUNT, CITY_NAMES, OFFER_TYPES, AppRoute, AuthorizationStatus};
