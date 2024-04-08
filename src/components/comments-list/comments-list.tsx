import type {OfferFullInfo} from '../../types/offer.ts';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {useEffect} from 'react';
import {commentsActions, commentsSelectors} from '../../store/slices/comments.ts';
import Review from '../review/review.tsx';

interface CommentsListProps {
  offerId: OfferFullInfo['id'];
}

const MAX_COUNT_COMMENTS = 10;

function CommentsList ({offerId}: CommentsListProps) {
  const {fetchComments} = useActionCreators(commentsActions);
  const postCommentStatus = useAppSelector(commentsSelectors.statusPostRequest);
  const comments = useAppSelector(commentsSelectors.sortedComments).slice(0, MAX_COUNT_COMMENTS);
  const commentsCount = comments.length;

  useEffect(() => {
    fetchComments(offerId);
  }, [postCommentStatus, offerId]);

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{commentsCount}</span>
      </h2>
      <ul className="reviews__list">
        {
          commentsCount > 0 &&
          comments.map((comment) => <Review key={comment.id} review={comment}/>
          )
        }
      </ul>
    </>
  );
}

export default CommentsList;
