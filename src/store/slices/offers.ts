import {OfferFullInfo, OfferShortInfo} from '../../types/offer.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStatus, RequestStatus} from '../../const.ts';
import {fetchCommentsAction, fetchOfferByIdAction, fetchOffersAction, fetchOffersNearAction} from '../thunks/offers.ts';
import {CommentInterface} from '../../types/comment.ts';

interface OffersState {
  offers: OfferShortInfo[];
  offerFullInfo: OfferFullInfo | null;
  offersNear: OfferShortInfo[];
  offersFavorites: OfferShortInfo[];
  activeOffer: OfferShortInfo | null;
  authorizationStatus: AuthStatus;
  status: RequestStatus;
  comments: CommentInterface[];
}

const initialState: OffersState = {
  offers: [],
  offerFullInfo: null,
  offersNear: [],
  offersFavorites: [],
  activeOffer: null,
  authorizationStatus: AuthStatus.Unknown,
  status: RequestStatus.Idle,
  comments: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<AuthStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setRequestStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
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
    builder.addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
      state.offerFullInfo = action.payload;
    });
    builder.addCase(fetchOffersNearAction.fulfilled, (state, action) => {
      state.offersNear = action.payload;
    });
    builder.addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
  selectors: {
    offers: (state) => state.offers,
    offerFullInfo: (state) => state.offerFullInfo,
    offersNear: (state) => state.offersNear,
    status: (state) => state.status,
    activeOffer: (state) => state.activeOffer,
    comments: (state) => state.comments,
  }
});

const offersActions = {
  ...offersSlice.actions,
  fetchOffers: fetchOffersAction,
  fetchOfferFullInfo: fetchOfferByIdAction,
  fetchOffersNear: fetchOffersNearAction,
  fetchComments: fetchCommentsAction,
};
const offersSelectors = offersSlice.selectors;

export { offersSlice, offersActions, offersSelectors };
