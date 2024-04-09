import {classNames} from '../../utils/class-names/class-names.ts';
import {OfferShortInfo} from '../../types/offer.ts';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {favoritesActions} from '../../store/slices/favorites.ts';
import {useState} from 'react';
import {AppRoute, AuthStatus} from '../../const.ts';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {userSelectors} from '../../store/slices/user.ts';

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
  const [isDisabled, setIsDisabled] = useState(false);
  const {toggleFavorite} = useActionCreators(favoritesActions);
  const authStatus = useAppSelector(userSelectors.authStatus);
  const navigate = useNavigate();

  const isAuth = authStatus === AuthStatus.Auth;

  const onClickHandler = () => {
    if (!isAuth) {
      navigate(AppRoute.Login);
    }
    setIsDisabled(true);
    toast.promise(toggleFavorite({status: Number(!isFavoriteCurrent) as 0 | 1, offerId}).unwrap(), {
      pending: 'Sending request',
      success: {
        render() {
          setIsFavoriteCurrent(!isFavoriteCurrent);
          setIsDisabled(false);
          return 'Success';
        }
      },
    });
  };

  return (
    <button
      className={
        classNames(
          `${componentType}__bookmark-button button`,
          isFavoriteCurrent && isAuth && `${componentType}__bookmark-button--active`)
      }
      type="button"
      onClick={onClickHandler}
      disabled={isDisabled}
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
