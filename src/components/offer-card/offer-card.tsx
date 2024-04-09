import type {OfferShortInfo} from '../../types/offer.ts';
import {AppRoute} from '../../const.ts';
import {Link} from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button.tsx';
import Rating from '../rating/rating.tsx';
import {memo} from 'react';

interface PlaceCardProps {
  offer: OfferShortInfo;
  componentType: 'cities' | 'favorites' | 'near-places';
  onHoverCard?: (offer: OfferShortInfo | null) => void;
}

function OfferCard_({offer, componentType, onHoverCard}: PlaceCardProps) {
  const {
    id,
    isPremium,
    previewImage,
    price,
    isFavorite,
    rating,
    title,
    type,
  } = offer;
  const link = `${AppRoute.Offer}/${id}`;
  const sizes = {
    'cities': {
      width: '260',
      height: '200',
    },
    'near-places': {
      width: '260',
      height: '200',
    },
    'favorites': {
      width: '150',
      height: '110',
    },
  };

  const mouseOnHandler = () => onHoverCard?.(offer);
  const mouseOfHandler = () => onHoverCard?.(null);

  return (
    <article
      className={`${componentType}__card place-card`}
      onMouseEnter={mouseOnHandler}
      onMouseLeave={mouseOfHandler}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${componentType}__image-wrapper place-card__image-wrapper`}>
        <Link to={link}>
          <img
            className="place-card__image"
            src={previewImage}
            alt="Place image"
            {...sizes[componentType]}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offerId={id} componentType={'place-card'} isFavorite={isFavorite} />
        </div>
        <Rating componentType={'place-card'} rating={rating} />
        <h2 className="place-card__name">
          <Link to={link}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

const OfferCard = memo(OfferCard_);

export default OfferCard;
