import Main from './pages/main/main.tsx';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NotFound from './pages/not-found/not-found.tsx';
import {AppRoute, CITIES, DEFAULT_CITY_SLUG} from './const.ts';
import Favorites from './pages/favorites/favorites.tsx';
import Offer from './pages/offer/offer.tsx';
import Login from './pages/login/login.tsx';
import {PrivateRoute, PublicRoute} from './components/access-route/access-route.tsx';

function App() {

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
            element={<Main citySlug={city.slug} />}
          />
        )
        )}
        <Route
          path={AppRoute.Login}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
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
