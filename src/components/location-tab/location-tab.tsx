import {classNames} from '../../utils/class-names/class-names.ts';
import {NavLink} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const.ts';
import {memo} from 'react';

interface LocationTabProps {
  cities?: typeof CITIES;
}

function LocationTab_({cities = CITIES}: LocationTabProps) {
  return (
    cities.map((city) => (
      <NavLink
        key={city.slug}
        to={AppRoute.Root + city.slug}
        className={({isActive}) =>
          classNames('locations__item-link tabs__item', isActive && 'tabs__item--active')}
      >
        <span>{city.name}</span>
      </NavLink>
    ))
  );
}

const LocationTab = memo(LocationTab_);

export default LocationTab;
