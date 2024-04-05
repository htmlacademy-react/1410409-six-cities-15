import {CityName, OfferShortInfo} from '../types/offer.ts';
import {CITIES} from '../const.ts';

const getRatingValue = (rating: OfferShortInfo['rating']) => (rating * 100) / 5;

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const getCitySlug = (cityName: CityName) => CITIES.find((city) => city.name === cityName)?.slug;

export {getRatingValue, capitalizeFirstLetter, getCitySlug};
