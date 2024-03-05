import type { RATING_STARS } from '../../const';

export type StarTitle = keyof typeof RATING_STARS;
export type StarValue = (typeof RATING_STARS)[keyof typeof RATING_STARS]

interface RatingStar {
  starTitle: StarTitle;
  starValue: StarValue;
  onClickHandle: React.Dispatch<React.SetStateAction<number>>;
}

function RatingStar({starTitle, starValue, onClickHandle}: RatingStar) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={starValue} id={`${starValue}-stars`}
        type="radio"
      />
      <label
        onClick={() => onClickHandle(starValue)}
        htmlFor={`${starValue}-stars`}
        className="reviews__rating-label form__rating-label"
        title={starTitle}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
