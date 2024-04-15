import {RequestStatus} from '../../const.ts';
import {getMockComment} from '../../mocks/comment.ts';
import {commentsSelectors, commentsSlice} from './comments.ts';
import {fetchCommentsAction, postCommentAction} from '../thunks/comments.ts';

describe('Comments slice', () => {
  const initialState = {
    comments: [],
    status: RequestStatus.Idle,
    statusPostRequest: RequestStatus.Idle,
  };
  const testComment = getMockComment();
  const testState = {
    [commentsSlice.name]: {
      comments: [testComment, getMockComment()],
      status: RequestStatus.Succeed,
      statusPostRequest: RequestStatus.Succeed,
    }
  };
  describe('Extra reducers', () => {
    it('should set status to Loading with fetchCommentsAction.pending', () => {
      const expectedState = {
        comments: [],
        status: RequestStatus.Loading,
        statusPostRequest: RequestStatus.Idle,
      };

      const result = commentsSlice.reducer(undefined, fetchCommentsAction.pending('', '', testComment));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Succeed with fetchCommentsAction.fulfilled', () => {
      const expectedState = {
        comments: [testComment],
        status: RequestStatus.Succeed,
        statusPostRequest: RequestStatus.Idle,
      };

      const result = commentsSlice.reducer(initialState, fetchCommentsAction.fulfilled([testComment], '', '', ''));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Failed with fetchCommentsAction.rejected', () => {
      const expectedState = {
        comments: [],
        status: RequestStatus.Failed,
        statusPostRequest: RequestStatus.Idle,
      };

      const result = commentsSlice.reducer(initialState, fetchCommentsAction.rejected(new Error(), '', '', ''));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Loading with postCommentAction.pending', () => {
      const expectedState = {
        comments: [],
        status: RequestStatus.Idle,
        statusPostRequest: RequestStatus.Loading,
      };

      const result = commentsSlice.reducer(undefined, postCommentAction.pending('', {offerId: '', body: testComment}));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Succeed with postCommentAction.fulfilled', () => {
      const expectedState = {
        comments: [testComment],
        status: RequestStatus.Idle,
        statusPostRequest: RequestStatus.Succeed,
      };

      const result = commentsSlice.reducer(initialState, postCommentAction.fulfilled(testComment,'', {offerId: '', body: testComment}));
      expect(result).toEqual(expectedState);
    });

    it('should set status to Failed with postCommentAction.rejected', () => {
      const expectedState = {
        comments: [],
        status: RequestStatus.Idle,
        statusPostRequest: RequestStatus.Failed,
      };

      const result = commentsSlice.reducer(initialState, postCommentAction.rejected(new Error(),'', {offerId: '', body: testComment}));
      expect(result).toEqual(expectedState);
    });
  });

  describe('Selectors', () => {

    it('should return comments from state', () => {
      const {comments} = testState[commentsSlice.name];
      const result = commentsSelectors.comments(testState);
      expect(result).toBe(comments);
    });

    it('should return status from state', () => {
      const {status} = testState[commentsSlice.name];
      const result = commentsSelectors.status(testState);
      expect(result).toBe(status);
    });

    it('should return statusPostRequest from state', () => {
      const {statusPostRequest} = testState[commentsSlice.name];
      const result = commentsSelectors.statusPostRequest(testState);
      expect(result).toBe(statusPostRequest);
    });
  });
});
