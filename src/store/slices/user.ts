import {createSlice} from '@reduxjs/toolkit';
import {AuthStatus, RequestStatus} from '../../const.ts';
import {checkAuthAction, loginAction, logoutAction} from '../thunks/user.ts';
import {UserAuthData, UserInfo} from '../../types/user.ts';
import {dropToken, saveToken} from '../../services/token.ts';

interface UserState {
  authStatus: AuthStatus;
  requestStatus: RequestStatus;
  userInfo: UserInfo | null;
  userAuthData: UserAuthData | null;
}

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  requestStatus: RequestStatus.Idle,
  userInfo: null,
  userAuthData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuthAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.authStatus = AuthStatus.Auth;
      state.requestStatus = RequestStatus.Succeed;
    });
    builder.addCase(checkAuthAction.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.requestStatus = RequestStatus.Failed;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      saveToken(state.userInfo.token);
      state.authStatus = AuthStatus.Auth;
      state.requestStatus = RequestStatus.Succeed;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.requestStatus = RequestStatus.Failed;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      dropToken();
      state.userInfo = null;
      state.authStatus = AuthStatus.NoAuth;
      state.requestStatus = RequestStatus.Succeed;
    });
    builder.addCase(logoutAction.rejected, (state) => {
      state.userInfo = null;
      state.authStatus = AuthStatus.NoAuth;
      state.requestStatus = RequestStatus.Failed;
    });
  },
  selectors: {
    authStatus: (state) => state.authStatus,
    requestStatus: (state) => state.requestStatus,
    userInfo: (state) => state.userInfo,
    userAuthData: (state) => state.userAuthData,
  }
});

const userActions = {
  ...userSlice.actions,
  checkAuth: checkAuthAction,
  login: loginAction,
  logout: logoutAction,
};
const userSelectors = userSlice.selectors;

export { userSlice, userActions, userSelectors };
