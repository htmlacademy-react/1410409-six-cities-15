import {Link, useLocation} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const.ts';
import {memo} from 'react';

function Logo_() {
  const location = useLocation();
  const logo = (
    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
  );

  const citySlugs = CITIES.map((city) => city.slug);

  return (
    citySlugs.includes(location.pathname.split('/').join('') as typeof citySlugs[number]) ? (
      <span className={'header__logo-link header__logo-link--active'}>
        {logo}
      </span>
    ) : (
      <Link to={AppRoute.Root} className="header__logo-link">
        {logo}
      </Link>
    )
  );
}

const Logo = memo(Logo_);

export default Logo;
