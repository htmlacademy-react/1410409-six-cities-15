import {OfferShortInfo} from '../types/offer.ts';
import {SortOption} from '../components/sort/const.ts';
import {Comment} from '../types/comment.ts';

function sortOffers (sortType: SortOption, offers: OfferShortInfo[]) {
  switch (sortType) {
    case SortOption.Popular:
      return offers;
    case SortOption.PriceLowToHigh:
      return offers.toSorted((offerA, offerB) => offerA.price - offerB.price);
    case SortOption.PriceHighToLow:
      return offers.toSorted((offerA, offerB) => offerB.price - offerA.price);
    case SortOption.TopRatedFirst:
      return offers.toSorted((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
}

export function sortCommentsByDate(commentA: Comment, commentB: Comment) {
  return new Date(commentB.date).getTime() - new Date(commentA.date).getTime();
}

export {sortOffers};
