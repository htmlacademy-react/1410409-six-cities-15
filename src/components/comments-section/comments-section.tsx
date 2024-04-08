import CommentsList from '../comments-list/comments-list.tsx';
import {AuthStatus} from '../../const.ts';
import FormReview from '../form-review/form-review.tsx';
import {useAppSelector} from '../../hooks/store.ts';
import {userSelectors} from '../../store/slices/user.ts';

interface CommentsSectionProps {
  offerId?: string;
}

function CommentsSection({offerId}: CommentsSectionProps) {
  const authStatus = useAppSelector(userSelectors.authStatus);

  return (
    <section className="offer__reviews reviews">
      {offerId && <CommentsList offerId={offerId}/>}
      {authStatus === AuthStatus.Auth && offerId && <FormReview offerId={offerId}/>}
    </section>
  );
}

export default CommentsSection;
