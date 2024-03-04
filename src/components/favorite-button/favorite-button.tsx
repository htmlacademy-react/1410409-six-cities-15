import {classNames} from '../../utils/class-names/class-names.ts';
import {OfferShortInfo} from '../../types/offer.ts';

interface FavoriteButtonProps {
  componentType: 'place-card' | 'offer';
  isFavorite: OfferShortInfo['isFavorite'];
}

function FavoriteButton({componentType, isFavorite}: FavoriteButtonProps) {
  const sizes = {
    'place-card': {
      width: '18',
      height: '19',
    },
    'offer': {
      width: '31',
      height: '33',
    },
  } as const;

  return (
    <button
      className={classNames(`
      ${componentType}__bookmark-button button`, isFavorite && `${componentType}__bookmark-button--active`)}
      type="button"
    >
      <svg className={`${componentType}__bookmark-icon`} {...sizes[componentType]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default FavoriteButton;
