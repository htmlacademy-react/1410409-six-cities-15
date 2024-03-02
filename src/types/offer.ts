import {CITIES, OFFER_TYPES} from '../const';

type OfferType = typeof OFFER_TYPES[number];
type CityName = typeof CITIES[number]['name'];

interface Offer {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  previewImage: string;
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

export type {Offer, City, Location, CityName};
