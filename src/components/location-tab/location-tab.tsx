import {classNames} from '../../utils/class-names/class-names.ts';
import {NavLink} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const.ts';

interface LocationTabProps {
  cities?: typeof CITIES;
}

function LocationTab({cities = CITIES}: LocationTabProps) {
  return (
    cities.map((city) => (
      <NavLink
        key={city.slug}
        to={AppRoute.Root + city.name}
        className={({isActive}) =>
          classNames('locations__item-link tabs__item', isActive && 'tabs__item--active')}
      >
        <span>{city.name}</span>
      </NavLink>
    ))
  );
}

export default LocationTab;
