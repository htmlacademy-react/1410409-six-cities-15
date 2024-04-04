import {AppRoute, AuthStatus} from '../../const.ts';
import {Navigate} from 'react-router-dom';
import React from 'react';
import {useAppSelector} from '../../hooks/store.ts';
import {userSelectors} from '../../store/slices/user.ts';

type PublicRouteProps = {
  children: React.JSX.Element;
}

function PublicRoute({children}: PublicRouteProps): React.JSX.Element {
  const authStatus = useAppSelector(userSelectors.authStatus);

  return (
    authStatus === AuthStatus.Auth
      ? <Navigate to={AppRoute.Root} />
      : children
  );
}

export default PublicRoute;
