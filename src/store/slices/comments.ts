import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const.ts';
import {CommentData} from '../../types/comment.ts';
import {fetchCommentsAction, postCommentAction} from '../thunks/comments.ts';
import {sortCommentsByDate} from '../../utils/sort.ts';

interface CommentsState {
  comments: CommentData[];
  status: RequestStatus;
  statusPostRequest: RequestStatus;
}

const initialState: CommentsState = {
  comments: [],
  status: RequestStatus.Idle,
  statusPostRequest: RequestStatus.Idle,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.comments = action.payload;
      state.status = RequestStatus.Succeed;
    });
    builder.addCase(fetchCommentsAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(postCommentAction.pending, (state) => {
      state.statusPostRequest = RequestStatus.Loading;
    });
    builder.addCase(postCommentAction.fulfilled, (state) => {
      state.statusPostRequest = RequestStatus.Succeed;
    });
    builder.addCase(postCommentAction.rejected, (state) => {
      state.statusPostRequest = RequestStatus.Failed;
    });
  },
  selectors: {
    comments: (state) => state.comments,
    status: (state) => state.status,
    statusPostRequest: (state) => state.statusPostRequest,
  }
});

const commentsActions = {
  ...commentsSlice.actions,
  fetchComments: fetchCommentsAction,
  postComment: postCommentAction,
};
const commentsSelectors = {
  ...commentsSlice.selectors,
  sortedComments:
    createSelector(
      commentsSlice.selectors.comments,
      (comments) => comments.toSorted(sortCommentsByDate)
    ),
};

export { commentsSlice, commentsActions, commentsSelectors };
