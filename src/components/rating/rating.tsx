import {OfferShortInfo} from '../../types/offer.ts';
import {getRatingValue} from '../../utils/common.ts';

interface FavoriteButtonProps {
  componentType: 'place-card' | 'offer' | 'reviews';
  rating: OfferShortInfo['rating'];
}

function Rating({componentType, rating}: FavoriteButtonProps) {

  return (
    <div className={`${componentType}__rating rating`}>
      <div className={`${componentType}__stars rating__stars`}>
        <span style={{width: `${getRatingValue(rating)}%`,}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
