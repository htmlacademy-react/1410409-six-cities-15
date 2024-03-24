import {OfferShortInfo} from '../../types/offer.ts';
import {getFavoriteOffers, getOffersShortInfo} from '../../mocks/offers.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OffersState {
  offers: OfferShortInfo[];
  offersFavorites: OfferShortInfo[];
  activeOffer: OfferShortInfo | null;
}

const initialState: OffersState = {
  offers: getOffersShortInfo(),
  offersFavorites: getFavoriteOffers(),
  activeOffer: null,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    getOffersShortInfoAction: (state, action: PayloadAction<OfferShortInfo[]>) => {
      state.offers = action.payload;
    },
    getFavoritesOffersAction: (state, action: PayloadAction<OfferShortInfo[]>) => {
      state.offers = action.payload;
    },
    setActiveOffer: (state, action: PayloadAction<OfferShortInfo>) => {
      state.activeOffer = action.payload;
    },
  },
  selectors: {
    offers: (state) => state.offers,
    activeOffer: (state) => state.activeOffer,
    offersFavorites: (state) => state.offersFavorites,
  }
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersSlice, offersActions, offersSelectors };
