import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

function Logo() {
  const location = useLocation();
  const logo = (
    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
  );

  return (
    location.pathname === '/' ? (
      <span className={'header__logo-link header__logo-link--active'}>
        {logo}
      </span>
    ) : (
      <Link to={AppRoute.Main} className="header__logo-link">
        {logo}
      </Link>
    )
  );
}

export default Logo;
