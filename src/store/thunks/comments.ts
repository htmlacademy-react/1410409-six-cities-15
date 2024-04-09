import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkApi} from '../../types/store.ts';
import {OfferFullInfo} from '../../types/offer.ts';
import {APIRoute} from '../../const.ts';
import {CommentData, CommentPost} from '../../types/comment.ts';


export const fetchCommentsAction = createAsyncThunk<CommentData[], OfferFullInfo['id'], ThunkApi>(
  'data/fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CommentData[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

export const postCommentAction =
  createAsyncThunk<CommentData, { offerId: OfferFullInfo['id']; body: CommentPost }, ThunkApi>(
    'data/postComment',
    async ({offerId, body}, {extra: api}) => {
      const {data} = await api.post<CommentData>(`${APIRoute.Comments}/${offerId}`, body);
      return data;
    },
  );

