import {MIN_LENGTH_COMMENT, MIN_STARS_COMMENT, RATING_STARS} from '../../const.ts';
import {StarTitle, StarValue} from '../rating-star/rating-star.tsx';
import RatingStar from '../rating-star/rating-star.tsx';
import {FormEvent, useRef, useState} from 'react';
import {useActionCreators} from '../../hooks/store.ts';
import {commentsActions} from '../../store/slices/comments.ts';
import {OfferFullInfo} from '../../types/offer.ts';

type FormReviewProps = {
  offerId: OfferFullInfo['id'];
};

type InitialForm = {
  comment: string;
  rating: StarValue;
};

const INITIAL_FORM_VALUE: InitialForm = {
  comment: '',
  rating: RATING_STARS['unknown'],
};

function FormReview({offerId}: FormReviewProps) {
  const [textAreaValue, setTextAreaValue] = useState(INITIAL_FORM_VALUE.comment);
  const [ratingStar, setRatingStar] = useState(INITIAL_FORM_VALUE.rating);
  const {postComment} = useActionCreators(commentsActions);
  const formRef = useRef(null);

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    postComment({offerId, body: {comment: textAreaValue, rating: ratingStar}})
      .unwrap()
      .then(() => {
        setTextAreaValue(INITIAL_FORM_VALUE.comment);
        setRatingStar(INITIAL_FORM_VALUE.rating);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={(evt) => onFormSubmit(evt)}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RATING_STARS).slice(1).map(([starTitle, starValue]) =>
          (
            <RatingStar
              onClickHandle={setRatingStar}
              key={starTitle}
              starTitle={starTitle as StarTitle}
              starValue={starValue}
              currentValue={ratingStar}
            />
          )
        )}
      </div>
      <textarea
        onChange={(evt) => setTextAreaValue(evt.target.value)}
        value={textAreaValue}
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
