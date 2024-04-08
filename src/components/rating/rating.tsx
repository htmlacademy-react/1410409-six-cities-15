import {OfferShortInfo} from '../../types/offer.ts';
import {getRatingValue} from '../../utils/common.ts';

interface RatingProps {
  componentType: 'place-card' | 'offer' | 'reviews';
  rating: OfferShortInfo['rating'];
}

function Rating({componentType, rating}: RatingProps) {

  return (
    <div className={`${componentType}__rating rating`}>
      <div className={`${componentType}__stars rating__stars`}>
        <span style={{width: `${getRatingValue(rating)}%`,}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {componentType === 'offer' && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

export default Rating;
