import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const.ts';
import {fetchFavoritesAction} from '../thunks/offers.ts';
import {OfferShortInfo} from '../../types/offer.ts';

interface FavoritesState {
  favorites: OfferShortInfo[];
  status: RequestStatus;
}

const initialState: FavoritesState = {
  favorites: [],
  status: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoritesAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.status = RequestStatus.Succeed;
    });
    builder.addCase(fetchFavoritesAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
  },
  selectors: {
    favorites: (state) => state.favorites,
    status: (state) => state.status,
  }
});

const favoritesActions = {
  ...favoritesSlice.actions,
  fetchFavorites: fetchFavoritesAction,
};
const favoritesSelectors = favoritesSlice.selectors;

export { favoritesSlice, favoritesActions, favoritesSelectors };
