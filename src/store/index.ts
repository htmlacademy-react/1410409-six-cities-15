import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {offersSlice} from './slices/offers.ts';
import {createAPI} from '../services/api.ts';
import {userSlice} from './slices/user.ts';
import {offerFullInfoSlice} from './slices/offer-full-info.ts';
import {commentsSlice} from './slices/comments.ts';
import {offersNearSlice} from './slices/offers-near.ts';
import {favoritesSlice} from './slices/favorites.ts';

export const api = createAPI();

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerFullInfoSlice.name]: offerFullInfoSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer,
  [offersNearSlice.name]: offersNearSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }),
});
