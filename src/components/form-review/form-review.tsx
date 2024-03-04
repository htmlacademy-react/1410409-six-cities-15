import {MIN_LENGTH_COMMENT, MIN_STARS_COMMENT, RATING_STARS} from '../../const.ts';
import RatingStar from '../rating-star/rating-star.tsx';
import type {StarTitle} from '../rating-star/rating-star.tsx';
import {FormEvent, useState} from 'react';

function FormReview() {
  const [ratingStar, setRatingStar] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState('');

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form
      onSubmit={(evt) => onFormSubmit(evt)}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RATING_STARS).map(([starTitle, starValue]) =>
          (
            <RatingStar
              onClickHandle={setRatingStar}
              key={starTitle}
              starTitle={starTitle as StarTitle}
              starValue={starValue}
            />
          )
        )}
      </div>
      <textarea
        onChange={(evt) => setTextAreaValue(evt.target.value)}
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={textAreaValue.length < MIN_LENGTH_COMMENT || ratingStar < MIN_STARS_COMMENT}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
