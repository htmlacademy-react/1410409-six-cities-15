import RatingStar, {StarTitle} from '../rating-star/rating-star.tsx';
import {RATING_STARS} from '../../const.ts';
import {memo} from 'react';

interface RatingStarInputsProps {
  isDisabled?: boolean;
}

function RatingStarInputs_({isDisabled}: RatingStarInputsProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RATING_STARS).slice(1).map(([starTitle, starValue]) =>
        (
          <RatingStar
            key={starTitle}
            starTitle={starTitle as StarTitle}
            starValue={starValue}
            isDisabled={isDisabled}
          />
        )
      )}
    </div>
  );
}

const RatingStarInputs = memo(RatingStarInputs_);

export default RatingStarInputs;
