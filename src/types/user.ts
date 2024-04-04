type UserInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

type UserAuthData = {
  email: string;
  password: string;
}


export type {UserAuthData, UserInfo};
