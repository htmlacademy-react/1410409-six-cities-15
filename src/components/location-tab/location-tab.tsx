import {classNames} from '../../utils/class-names/class-names.ts';

type LocationTabProps = {
  cityName: string;
  isActive?: boolean;
}

function LocationTab({cityName, isActive}: LocationTabProps) {
  return (
    <a className={classNames('locations__item-link tabs__item', isActive && 'tabs__item--active')} href="#">
      <span>{cityName}</span>
    </a>
  );
}

export default LocationTab;
