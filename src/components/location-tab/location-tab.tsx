import {classNames} from '../../utils/class-names/class-names.ts';
import {NavLink} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const.ts';
import {memo} from 'react';

interface LocationTabProps {
  cities?: typeof CITIES;
}

function LocationTab_({cities = CITIES}: LocationTabProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.slug} className="locations__item">
          <NavLink
            to={AppRoute.Root + city.slug}
            className={({isActive}) =>
              classNames('locations__item-link tabs__item', isActive && 'tabs__item--active')}
          >
            <span>{city.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

const LocationTab = memo(LocationTab_);

export default LocationTab;
