import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, RequestStatus} from '../../const.ts';
import {toast} from 'react-toastify';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {favoritesActions, favoritesSelectors} from '../../store/slices/favorites.ts';
import {userActions, userSelectors} from '../../store/slices/user.ts';

function HeaderNavAuthUser() {
  const userInfo = useAppSelector(userSelectors.userInfo);
  const {logout} = useActionCreators(userActions);
  const favoritesCount = useAppSelector(favoritesSelectors.favorites).length;
  const {fetchFavorites} = useActionCreators(favoritesActions);
  const statusFetchFavorites = useAppSelector(favoritesSelectors.statusFetchFavorites);

  const handleSingOutClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    await logout().unwrap().catch((error: Error) => {
      toast.warning(error.message);
    });
  };

  useEffect(() => {
    if (statusFetchFavorites === RequestStatus.Idle) {
      toast.promise(fetchFavorites(), {
        error: 'Ошибка загрузки избранного'
      });
    }
  }, [statusFetchFavorites, fetchFavorites]);

  return (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            {userInfo?.avatarUrl && <img className="user__avatar" src={userInfo.avatarUrl} alt="avatar"/>}
          </div>
          {userInfo?.email && <span className="header__user-name user__name">{userInfo.email}</span>}
          <span className="header__favorite-count">{favoritesCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href="#"
          onClick={(e) => {
            handleSingOutClick(e).catch((error: Error) => toast.warning(error.message));
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default HeaderNavAuthUser;
