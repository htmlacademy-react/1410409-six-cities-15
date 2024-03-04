import Main from './pages/main/main.tsx';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NotFound from './pages/not-found/not-found.tsx';
import {AppRoute, AuthorizationStatus, CITIES, DEFAULT_CITY_SLUG} from './const.ts';
import Favorites from './pages/favorites/favorites.tsx';
import Offer from './pages/offer/offer.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import Login from './pages/login/login.tsx';
import PublicRoute from './components/public-route/public-route.tsx';
import {OfferShortInfo} from './types/offer.ts';

interface AppProps {
  offersCount: number;
  offers: OfferShortInfo[];
  offersFavorites: OfferShortInfo[];
}

function App({offersCount, offers, offersFavorites}: AppProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Navigate to={DEFAULT_CITY_SLUG} />}
        />
        {CITIES.map((city) => (
          <Route
            key={city.slug}
            path={AppRoute.Root + city.slug}
            element={<Main offers={offers} offersCount={offersCount} />}
          />
        )
        )}
        <Route
          path={AppRoute.Login}
          element={
            <PublicRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offersFavorites={offersFavorites} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element={<Offer userAuth={AuthorizationStatus.Auth} />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
