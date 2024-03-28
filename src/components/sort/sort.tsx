import React, {useEffect, useRef} from 'react';
import {useBoolean} from '../../hooks/boolean.ts';
import {classNames} from '../../utils/class-names/class-names.ts';
import {SORT_TYPES, SortType} from './const.ts';

interface Props {
  activeSortType: SortType;
  setActiveSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

function Sort({activeSortType, setActiveSortType}: Props) {
  const {isOn, toggle, off} = useBoolean(false);
  const sortFormRef = useRef(null);

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          off();
        }
      };
      const onClickOutside = (evt: MouseEvent) => {
        if (sortFormRef.current && !(sortFormRef.current as HTMLElement).contains(evt.target as Node)) {
          off();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);
      document.addEventListener('click', onClickOutside);

      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
        document.removeEventListener('click', onClickOutside);
      };
    }
  }, [isOn, off, activeSortType]);

  const onClickSortOption = (sortType: SortType) => {
    setActiveSortType(sortType);
    off();
  };

  return (
    <form ref={sortFormRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={toggle} className="places__sorting-type" tabIndex={0}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', isOn && 'places__options--opened') }>
        {SORT_TYPES.map((sortType, index) => (
          <li
            key={sortType}
            className={classNames('places__option', activeSortType === sortType && 'places__option--active')}
            tabIndex={index}
            onClick={() => onClickSortOption(sortType)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
