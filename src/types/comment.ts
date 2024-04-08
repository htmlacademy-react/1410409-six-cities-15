type Comment = {
  'offerId'?: string;
  'id': string;
  'comment': string;
  'date': string;
  'rating': number;
  'user': {
    'name': string;
    'avatarUrl': string;
    'isPro': boolean;
  };
}

type CommentPost = {
  comment: string;
  rating: number;
}

export type {Comment, CommentPost};
