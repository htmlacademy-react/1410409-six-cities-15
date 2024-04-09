import {memo, useEffect, useRef} from 'react';
import {useBoolean} from '../../hooks/boolean.ts';
import {classNames} from '../../utils/class-names/class-names.ts';
import {SortOption} from './const.ts';

interface Props {
  activeSortOption: SortOption;
  setActiveSortOption: (newSortOption: SortOption) => void;
}

function Sort_({activeSortOption, setActiveSortOption}: Props) {
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
  }, [isOn, off, activeSortOption]);

  const onClickSortOption = (sortOption: SortOption) => {
    setActiveSortOption(sortOption);
    off();
  };

  return (
    <form ref={sortFormRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={toggle} className="places__sorting-type" tabIndex={0}>
        {activeSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', isOn && 'places__options--opened') }>
        {Object.values(SortOption).map((sortOption, index) => (
          <li
            key={sortOption}
            className={classNames('places__option', activeSortOption === sortOption && 'places__option--active')}
            tabIndex={index}
            onClick={() => onClickSortOption(sortOption)}
          >
            {sortOption}
          </li>
        ))}
      </ul>
    </form>
  );
}

const Sort = memo(Sort_);

export default Sort;
