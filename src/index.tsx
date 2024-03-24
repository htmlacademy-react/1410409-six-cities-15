import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {OFFERS_COUNT} from './const.ts';
import {getFavoriteOffers, getOffersShortInfo} from './mocks/offers.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const offers = getOffersShortInfo();
const offersFavorites = getFavoriteOffers();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} offersFavorites={offersFavorites} offersCount={OFFERS_COUNT} />
    </Provider>
  </React.StrictMode>
);
