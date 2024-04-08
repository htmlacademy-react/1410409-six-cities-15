import {RATING_STARS} from '../../const.ts';
import RatingStar, {StarTitle} from '../rating-star/rating-star.tsx';
import {FormEvent, useState} from 'react';
import {useActionCreators} from '../../hooks/store.ts';
import {commentsActions} from '../../store/slices/comments.ts';
import {OfferFullInfo} from '../../types/offer.ts';
import {MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT} from './const.ts';
import {toast} from 'react-toastify';

type FormReviewProps = {
  offerId: OfferFullInfo['id'];
};

type Form = HTMLFormElement & {
  rating: RadioNodeList;
  review: HTMLTextAreaElement;
};

const verifyForm = (comment: string, rating: string) =>
  comment.length <= MIN_LENGTH_COMMENT || comment.length > MAX_LENGTH_COMMENT || Number(rating) === RATING_STARS.unknown;

function FormReview({offerId}: FormReviewProps) {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const {postComment} = useActionCreators(commentsActions);

  const onChangeForm = (evt: FormEvent<HTMLFormElement>) => {
    const form = evt.currentTarget as Form;
    const rating = form.rating.value;
    const comment = form.review.value;
    setIsSubmitDisabled(verifyForm(comment, rating));
  };

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget as Form;

    const clearForm = () => {
      form.reset();
      setIsSubmitDisabled(true);
      setIsFormDisabled(false);
    };

    const commentToSend = {
      offerId,
      body: {
        comment: form.review.value,
        rating: Number(form.rating.value),
      },
    };
    setIsFormDisabled(true);
    toast.promise(postComment(commentToSend).unwrap(), {
      pending: 'Sending comment',
      success: {
        render() {
          clearForm();
          return 'Comment sent';
        }
      },
      error: {
        render() {
          setIsFormDisabled(false);
          return 'Failed to send comment';
        }
      }
    });
  };

  return (
    <form
      onSubmit={(evt) => onFormSubmit(evt)}
      onChange={(evt) => onChangeForm(evt)}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RATING_STARS).slice(1).map(([starTitle, starValue]) =>
          (
            <RatingStar
              key={starTitle}
              starTitle={starTitle as StarTitle}
              starValue={starValue}
              isDisabled={isFormDisabled}
            />
          )
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isFormDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled || isFormDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
