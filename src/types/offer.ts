import {CITIES, OFFER_TYPES} from '../const';

type OfferType = typeof OFFER_TYPES[number];
type CityName = typeof CITIES[number]['name'];
type CitySlug = typeof CITIES[number]['slug'];

interface OfferShortInfo {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  previewImage?: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

interface City {
  name: CityName;
  location: Location;
}

interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface OfferFullInfo extends Omit<OfferShortInfo, 'previewImage'> {
  'description': string;
  'images': string[];
  'goods': string[];
  'host': Host;
  'bedrooms': number;
  'maxAdults': number;
}

interface Host {
  'isPro': boolean;
  'name': string;
  'avatarUrl': string;
}

type PostFavorites = {
  offerId: string;
  status: 0 | 1;
}

interface OffersByCity {
  [key: string]: OfferShortInfo[];
}

export type {OfferShortInfo, OfferFullInfo, City, Location, CityName, Host, CitySlug, PostFavorites, OffersByCity};
