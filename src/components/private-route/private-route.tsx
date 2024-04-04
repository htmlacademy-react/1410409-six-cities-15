import {AppRoute, AuthStatus} from '../../const.ts';
import {Navigate} from 'react-router-dom';
import React from 'react';
import {useAppSelector} from '../../hooks/store.ts';
import {userSelectors} from '../../store/slices/user.ts';

type PrivateRouteProps = {
  children: React.JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps) {
  const authStatus = useAppSelector(userSelectors.authStatus);
  console.log(authStatus);
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
