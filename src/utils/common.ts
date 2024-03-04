import {OfferShortInfo} from '../types/offer.ts';

const getRatingValue = (rating: OfferShortInfo['rating']) => (rating * 100) / 5;

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export {getRatingValue, capitalizeFirstLetter};
