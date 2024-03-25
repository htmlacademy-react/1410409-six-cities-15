import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../types/store.ts';
import {ActionCreatorsMapObject, bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';

const useAppDispatch = useDispatch<AppDispatch>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export {useAppDispatch, useAppSelector, useActionCreators};
