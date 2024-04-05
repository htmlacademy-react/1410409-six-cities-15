import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const.ts';
import {fetchCommentsAction} from '../thunks/offers.ts';
import {CommentInterface} from '../../types/comment.ts';

interface CommentsState {
  comments: CommentInterface[];
  status: RequestStatus;
}

const initialState: CommentsState = {
  comments: [],
  status: RequestStatus.Idle,
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
  },
  selectors: {
    comments: (state) => state.comments,
    status: (state) => state.status,
  }
});

const commentsActions = {
  ...commentsSlice.actions,
  fetchComments: fetchCommentsAction,
};
const commentsSelectors = commentsSlice.selectors;

export { commentsSlice, commentsActions, commentsSelectors };
