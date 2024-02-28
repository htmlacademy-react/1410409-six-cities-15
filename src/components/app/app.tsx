import type {MainProps} from '../../pages/main/main.tsx';
import Main from '../../pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Login from '../../pages/login/login.tsx';

type AppProps = MainProps

function App({offersCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main offersCount={offersCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
