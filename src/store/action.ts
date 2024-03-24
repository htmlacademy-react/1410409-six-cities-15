import {createAction} from '@reduxjs/toolkit';
import {CITIES} from '../const.ts';
import {getOffersShortInfo} from '../mocks/offers.ts';

export const setCityAction = createAction(
  'main/city',
  (value: typeof CITIES[number]['slug']) => ({
    payload: value
  }));

export const getOffersShortInfoAction = createAction(
  'main/offers-short',
  () => ({
    payload: getOffersShortInfo(),
  }));
