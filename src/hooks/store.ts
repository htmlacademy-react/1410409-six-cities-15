/* eslint-disable @typescript-eslint/no-explicit-any */
import {TypedUseSelectorHook, useDispatch, useSelector, useStore} from 'react-redux';
import {AppDispatch, RootState} from '../types/store.ts';
import {ActionCreatorsMapObject, AsyncThunk, bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {store} from '../store';

const useAppDispatch = useDispatch<AppDispatch>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppStore: () => typeof store = useStore;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key];
}

type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (...args: Parameters<Thunk>) => ReturnType<ReturnType<Thunk>>;

export {useAppDispatch, useAppSelector, useAppStore, useActionCreators};
