import {OfferFullInfo} from '../../types/offer.ts';
import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const.ts';
import {fetchOfferFullInfoAction} from '../thunks/offers.ts';

interface OfferFullInfoState {
  offerFullInfo: OfferFullInfo | null;
  status: RequestStatus;
}

const initialState: OfferFullInfoState = {
  offerFullInfo: null,
  status: RequestStatus.Idle,
};

const offerFullInfoSlice = createSlice({
  name: 'offerFullInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOfferFullInfoAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchOfferFullInfoAction.fulfilled, (state, action) => {
      state.offerFullInfo = action.payload;
      state.status = RequestStatus.Succeed;
    });
    builder.addCase(fetchOfferFullInfoAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
  },
  selectors: {
    offerFullInfo: (state) => state.offerFullInfo,
    status: (state) => state.status,
  }
});

const offerFullInfoActions = {
  ...offerFullInfoSlice.actions,
  fetchOfferFullInfo: fetchOfferFullInfoAction,
};
const offerFullInfoSelectors = offerFullInfoSlice.selectors;

export { offerFullInfoSlice, offerFullInfoActions, offerFullInfoSelectors };
