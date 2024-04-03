import {AppRoute, AuthStatus} from '../../const.ts';
import {Navigate} from 'react-router-dom';
import React from 'react';
import {PrivateRouteProps} from '../private-route/private-route.tsx';


function PublicRoute({authorizationStatus, children}: PrivateRouteProps): React.JSX.Element {
  return (
    authorizationStatus === AuthStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Root} />
  );
}

export default PublicRoute;
