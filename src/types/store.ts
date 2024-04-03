import {store} from '../store';
import {AxiosInstance} from 'axios';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type ThunkApi = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export type {RootState, AppDispatch, ThunkApi};
