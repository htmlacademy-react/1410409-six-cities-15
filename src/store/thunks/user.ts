import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkApi} from '../../types/store.ts';
import {APIRoute} from '../../const.ts';
import {UserAuthData, UserInfo} from '../../types/user.ts';

export const checkAuthAction = createAsyncThunk<UserInfo, undefined, ThunkApi>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserInfo>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserInfo, UserAuthData, ThunkApi>(
  'user/login',
  async (body, {extra: api}) => {
    const {data} = await api.post<UserInfo>(APIRoute.Login, body);
    return data;
  },
);

export const logoutAction = createAsyncThunk<unknown, undefined, ThunkApi>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
  },
);
