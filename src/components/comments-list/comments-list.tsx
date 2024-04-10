import type {OfferFullInfo} from '../../types/offer.ts';
import {useActionCreators, useAppSelector} from '../../hooks/store.ts';
import {useEffect} from 'react';
import {commentsActions, commentsSelectors} from '../../store/slices/comments.ts';
import Comment from '../comment/comment.tsx';

interface CommentsListProps {
  offerId: OfferFullInfo['id'];
}

const MAX_COUNT_COMMENTS = 10;

function CommentsList ({offerId}: CommentsListProps) {
  const {fetchComments} = useActionCreators(commentsActions);
  const comments = useAppSelector(commentsSelectors.sortedComments);
  const commentsCount = comments.length;
  const commentsPrepared = comments.slice(0, MAX_COUNT_COMMENTS);

  useEffect(() => {
    fetchComments(offerId);
  }, [offerId]);

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{commentsCount}</span>
      </h2>
      <ul className="reviews__list">
        {
          commentsCount > 0 &&
          commentsPrepared.map((comment) => <Comment key={comment.id} commentData={comment}/>
          )
        }
      </ul>
    </>
  );
}

export default CommentsList;
