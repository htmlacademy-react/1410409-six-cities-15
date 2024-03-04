import Rating from '../rating/rating.tsx';
import {CommentInterface} from '../../types/comment.ts';
import * as dayjs from 'dayjs';
import {DATE_FORMAT, DATE_FORMAT_ATTRIBUTE} from '../../const.ts';

interface ReviewProps {
  review: CommentInterface;
}

function Review({review}: ReviewProps) {
  const {
    comment,
    date,
    rating,
    user
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating componentType={'reviews'} rating={rating}/>
        <p className="reviews__text">
          {comment}
        </p>
        <time
          className="reviews__time"
          dateTime={dayjs(date).format(DATE_FORMAT_ATTRIBUTE)}
        >
          {dayjs(date).format(DATE_FORMAT)}
        </time>
      </div>
    </li>
  );
}

export default Review;
