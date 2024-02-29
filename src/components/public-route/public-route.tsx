import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {Navigate} from 'react-router-dom';
import React from 'react';
import {PrivateRouteProps} from '../private-route/private-route.tsx';


function PublicRoute({authorizationStatus, children}: PrivateRouteProps): React.JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}

export default PublicRoute;
