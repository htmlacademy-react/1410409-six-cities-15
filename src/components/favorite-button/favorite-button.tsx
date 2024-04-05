import {classNames} from '../../utils/class-names/class-names.ts';
import {OfferShortInfo} from '../../types/offer.ts';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {favoritesActions, favoritesSelectors} from '../../store/slices/favorites.ts';
import {useState} from 'react';
import {RequestStatus} from '../../const.ts';
import {toast} from 'react-toastify';

interface FavoriteButtonProps {
  componentType: 'place-card' | 'offer';
  isFavorite: OfferShortInfo['isFavorite'];
  offerId: OfferShortInfo['id'];
}

function FavoriteButton({componentType, isFavorite, offerId}: FavoriteButtonProps) {
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

  const [isFavoriteCurrent, setIsFavoriteCurrent] = useState(isFavorite);
  const {toggleFavorite} = useActionCreators(favoritesActions);
  const statusToggleFavorite = useAppSelector(favoritesSelectors.statusToggleFavorite);

  const onClickHandler = () => {
    toast.promise(toggleFavorite({status: Number(!isFavoriteCurrent) as 0 | 1, offerId})
      .unwrap()
      .then(() => setIsFavoriteCurrent(!isFavoriteCurrent)), {
      pending: 'Запрос отправляется',
    });
  };

  return (
    <button
      className={
        classNames(
          `${componentType}__bookmark-button button`,
          isFavoriteCurrent && `${componentType}__bookmark-button--active`)
      }
      type="button"
      onClick={onClickHandler}
      disabled={statusToggleFavorite === RequestStatus.Loading}
    >
      <svg className={`${componentType}__bookmark-icon`} {...sizes[componentType]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavoriteCurrent ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default FavoriteButton;
