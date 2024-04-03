import {AppRoute, AuthStatus} from '../../const.ts';
import {Navigate} from 'react-router-dom';
import React from 'react';

export type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: React.JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): React.JSX.Element {

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
