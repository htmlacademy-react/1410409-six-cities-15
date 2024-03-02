import type {MainProps} from './pages/main/main.tsx';
import Main from './pages/main/main.tsx';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NotFound from './pages/not-found/not-found.tsx';
import {AppRoute, AuthorizationStatus, CITIES, DEFAULT_CITY} from './const.ts';
import Favorites from './pages/favorites/favorites.tsx';
import Offer from './pages/offer/offer.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import Login from './pages/login/login.tsx';
import PublicRoute from './components/public-route/public-route.tsx';

type AppProps = MainProps

function App({offersCount}: AppProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Navigate to={DEFAULT_CITY} />}
        />
        {CITIES.map((city) => (
          <Route
            key={city.slug}
            path={AppRoute.Root + city.slug}
            element={<Main offersCount={offersCount} />}
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
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Offer />}
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
