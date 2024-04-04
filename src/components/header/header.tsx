import Logo from '../logo/logo.tsx';
import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.ts';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {userActions, userSelectors} from '../../store/slices/user.ts';

function Header() {
  const authStatus = useAppSelector(userSelectors.authStatus);
  const userInfo = useAppSelector(userSelectors.userInfo);
  const {logout} = useActionCreators(userActions);

  const logoutHandler = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    await logout();
  };

  const AuthUserComponent = (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            {userInfo?.avatarUrl && <img src={userInfo.avatarUrl} alt="avatar"/>}
          </div>
          {userInfo?.name && <span className="header__user-name user__name">{userInfo.name}</span>}
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href="#"
          onClick={(e) => logoutHandler(e)}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );

  const NotAuthUserComponent = (
    <li className="header__nav-item user">
      <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthStatus.Auth ? AuthUserComponent : NotAuthUserComponent}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
