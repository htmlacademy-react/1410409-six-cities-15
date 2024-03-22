const RATING_STARS = {
  'perfect': 5,
  'good': 4,
  'not bad': 3,
  'badly': 2,
  'terribly': 1
} as const;

const MIN_LENGTH_COMMENT = 50;
const MIN_STARS_COMMENT = 1;

const OFFERS_COUNT = 153;

const CITIES = [
  {name: 'Paris', location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}, slug: 'paris'},
  {name: 'Cologne', location: {latitude: 50.938361, longitude: 6.959974, zoom: 13}, slug: 'cologne'},
  {name: 'Brussels', location: {latitude: 50.846557, longitude: 4.351697, zoom: 13}, slug: 'brussels'},
  {name: 'Amsterdam', location: {latitude: 52.37454, longitude: 4.897976, zoom: 13}, slug: 'amsterdam'},
  {name: 'Hamburg', location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}, slug: 'hamburg'},
  {name: 'Dusseldorf', location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}, slug: 'dusseldorf'},
] as const;

const CITY_NAMES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const DEFAULT_CITY_SLUG = CITIES[0].slug;

const OFFER_TYPES = [
  'hotel',
  'house',
  'apartment',
  'room',
] as const;

const enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const DATE_FORMAT = 'MMMM YYYY';
const DATE_FORMAT_ATTRIBUTE = 'YYYY-MM-DD';

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export {
  RATING_STARS,
  OFFERS_COUNT,
  CITY_NAMES,
  OFFER_TYPES,
  AppRoute,
  AuthorizationStatus,
  CITIES,
  DEFAULT_CITY_SLUG,
  DATE_FORMAT,
  DATE_FORMAT_ATTRIBUTE,
  MIN_STARS_COMMENT,
  MIN_LENGTH_COMMENT,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
};
