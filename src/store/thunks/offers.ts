import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkApi} from '../../types/store.ts';
import {OfferFullInfo, OfferShortInfo} from '../../types/offer.ts';
import {APIRoute} from '../../const.ts';

export const fetchOffersAction = createAsyncThunk<OfferShortInfo[], undefined, ThunkApi>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferShortInfo[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferFullInfoAction = createAsyncThunk<OfferFullInfo, OfferFullInfo['id'], ThunkApi>(
  'data/fetchOfferFullInfo',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferFullInfo>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchOffersNearAction = createAsyncThunk<OfferShortInfo[], OfferFullInfo['id'], ThunkApi>(
  'data/fetchOffersNear',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferShortInfo[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<OfferShortInfo[], undefined, ThunkApi>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferShortInfo[]>(APIRoute.Favorite);
    return data;
  },
);
