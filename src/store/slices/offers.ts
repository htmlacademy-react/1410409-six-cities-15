import {OfferShortInfo} from '../../types/offer.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const.ts';
import {fetchOffersAction} from '../thunks/offers.ts';

interface OffersState {
  offers: OfferShortInfo[];
  offersFavorites: OfferShortInfo[];
  activeOffer: OfferShortInfo | null;
  status: RequestStatus;
}

const initialState: OffersState = {
  offers: [],
  offersFavorites: [],
  activeOffer: null,
  status: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setActiveOffer: (state, action: PayloadAction<OfferShortInfo>) => {
      state.activeOffer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.status = RequestStatus.Succeed;
    });
    builder.addCase(fetchOffersAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
  },
  selectors: {
    offers: (state) => state.offers,
    activeOffer: (state) => state.activeOffer,
    status: (state) => state.status,
  }
});

const offersActions = {
  ...offersSlice.actions,
  fetchOffers: fetchOffersAction,
};
const offersSelectors = offersSlice.selectors;

export { offersSlice, offersActions, offersSelectors };
