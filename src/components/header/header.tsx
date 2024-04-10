import Logo from '../logo/logo.tsx';
import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks/store.ts';
import {userSelectors} from '../../store/slices/user.ts';
import {memo} from 'react';
import HeaderNavAuthUser from '../header-nav-auth-user/header-nav-auth-user.tsx';

function Header_() {
  const authStatus = useAppSelector(userSelectors.authStatus);

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
              {authStatus === AuthStatus.Auth ? <HeaderNavAuthUser /> : NotAuthUserComponent}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const Header = memo(Header_);

export default Header;
