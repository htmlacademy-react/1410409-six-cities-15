import RatingStar, {StarTitle} from '../rating-star/rating-star.tsx';
import {RATING_STARS} from '../../const.ts';

interface RatingStarInputsProps {
  isDisabled?: boolean;
}

function RatingStarInputs({isDisabled}: RatingStarInputsProps) {
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

export default RatingStarInputs;
