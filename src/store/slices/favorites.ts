import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const.ts';
import {fetchFavoritesAction, toggleFavoriteAction} from '../thunks/offers.ts';
import {OfferShortInfo} from '../../types/offer.ts';

interface FavoritesState {
  favorites: OfferShortInfo[];
  statusFetchFavorites: RequestStatus;
  statusToggleFavorite: RequestStatus;
}

const initialState: FavoritesState = {
  favorites: [],
  statusFetchFavorites: RequestStatus.Idle,
  statusToggleFavorite: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoritesAction.pending, (state) => {
      state.statusFetchFavorites = RequestStatus.Loading;
    });
    builder.addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.statusFetchFavorites = RequestStatus.Succeed;
    });
    builder.addCase(fetchFavoritesAction.rejected, (state) => {
      state.statusFetchFavorites = RequestStatus.Failed;
    });
    builder.addCase(toggleFavoriteAction.pending, (state) => {
      state.statusToggleFavorite = RequestStatus.Loading;
    });
    builder.addCase(toggleFavoriteAction.fulfilled, (state, action) => {
      state.statusToggleFavorite = RequestStatus.Succeed;
      const changedOffer = action.payload;

      if (changedOffer.isFavorite) {
        state.favorites.push(changedOffer);
        return;
      }

      const changedFavoriteIndex = state.favorites.findIndex((favoriteOffer) => favoriteOffer.id === changedOffer.id);
      state.favorites.splice(changedFavoriteIndex, 1);
    });
    builder.addCase(toggleFavoriteAction.rejected, (state) => {
      state.statusToggleFavorite = RequestStatus.Failed;
    });
  },
  selectors: {
    favorites: (state) => state.favorites,
    statusFetchFavorites: (state) => state.statusFetchFavorites,
    statusToggleFavorite: (state) => state.statusToggleFavorite,
  }
});

const favoritesActions = {
  ...favoritesSlice.actions,
  fetchFavorites: fetchFavoritesAction,
  toggleFavorite: toggleFavoriteAction,
};
const favoritesSelectors = favoritesSlice.selectors;

export { favoritesSlice, favoritesActions, favoritesSelectors };
