import {AppRoute, AuthStatus} from '../../const.ts';
import {Navigate, useLocation} from 'react-router-dom';
import React from 'react';
import {useAppSelector} from '../../hooks/store.ts';
import {userSelectors} from '../../store/slices/user.ts';
import Loader from '../loader/loader.tsx';

type AccessRouteProps = {
  children: React.JSX.Element;
}

type Redirect = {
  from?: string;
};

const createAccessRoute = (status: AuthStatus, fallback: AppRoute) =>
  function AccessRoute({children}: AccessRouteProps) {
    const authStatus = useAppSelector(userSelectors.authStatus);
    const location = useLocation();

    if (authStatus === AuthStatus.Unknown) {
      return <Loader/>;
    }

    const redirect = (location.state as Redirect ?? {}).from ?? fallback;

    return (
      authStatus === status
        ? children
        :
        <Navigate
          to={redirect}
          state={{
            from: location.pathname
          }}
        />
    );
  };

const PrivateRoute = createAccessRoute(AuthStatus.Auth, AppRoute.Login);
const PublicRoute = createAccessRoute(AuthStatus.NoAuth, AppRoute.Root);


export {PrivateRoute, PublicRoute};
