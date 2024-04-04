import Main from './pages/main/main.tsx';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NotFound from './pages/not-found/not-found.tsx';
import {AppRoute, AuthStatus, CITIES, DEFAULT_CITY_SLUG} from './const.ts';
import Favorites from './pages/favorites/favorites.tsx';
import Offer from './pages/offer/offer.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import Login from './pages/login/login.tsx';
import PublicRoute from './components/public-route/public-route.tsx';
import {useActionCreators, useAppSelector} from './hooks/store.ts';
import {userActions, userSelectors} from './store/slices/user.ts';
import {useEffect} from 'react';

function App() {
  const {checkAuth} = useActionCreators(userActions);
  const authStatus = useAppSelector(userSelectors.authStatus);
  useEffect(() => {
    checkAuth();
  }, [authStatus, checkAuth]);

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
          element={<Offer userAuth={AuthStatus.Auth} />}
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
