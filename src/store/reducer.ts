import {CITIES, DEFAULT_CITY_SLUG} from '../const.ts';
import {getOffersShortInfo} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {getOffersShortInfoAction, setCityAction} from './action.ts';
import {OfferShortInfo} from '../types/offer.ts';

interface State {
  city: typeof CITIES[number]['slug'];
  offers: OfferShortInfo[];
}

const initialState: State = {
  city: DEFAULT_CITY_SLUG,
  offers: getOffersShortInfo(),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersShortInfoAction, (state, action) => {
      state.offers = action.payload;
    });
});
