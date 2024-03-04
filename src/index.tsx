import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {OFFERS_COUNT} from './const.ts';
import {getFavoriteOffers, getOffersShortInfo} from './mocks/offers.ts';

const offers = getOffersShortInfo();
const offersFavorites = getFavoriteOffers();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} offersFavorites={offersFavorites} offersCount={OFFERS_COUNT} />
  </React.StrictMode>
);
