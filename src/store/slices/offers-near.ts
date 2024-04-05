import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const.ts';
import {fetchOffersNearAction} from '../thunks/offers.ts';
import {OfferShortInfo} from '../../types/offer.ts';

interface OffersNearState {
  offersNear: OfferShortInfo[];
  status: RequestStatus;
}

const initialState: OffersNearState = {
  offersNear: [],
  status: RequestStatus.Idle,
};

const offersNearSlice = createSlice({
  name: 'offersNear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffersNearAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchOffersNearAction.fulfilled, (state, action) => {
      state.offersNear = action.payload;
      state.status = RequestStatus.Succeed;
    });
    builder.addCase(fetchOffersNearAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
  },
  selectors: {
    offersNear: (state) => state.offersNear,
    status: (state) => state.status,
  }
});

const offersNearActions = {
  ...offersNearSlice.actions,
  fetchOffersNear: fetchOffersNearAction,
};
const offersNearSelectors = offersNearSlice.selectors;

export { offersNearSlice, offersNearActions, offersNearSelectors };
