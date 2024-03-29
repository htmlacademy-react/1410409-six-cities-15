import {OfferShortInfo} from '../types/offer.ts';
import {SortOption} from '../components/sort/const.ts';

function sortOffers (sortType: SortOption, offers: OfferShortInfo[]) {
  switch (sortType) {
    case SortOption.Popular:
      return offers;
    case SortOption.PriceLowToHigh:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortOption.PriceHighToLow:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortOption.TopRatedFirst:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
}

export {sortOffers};
