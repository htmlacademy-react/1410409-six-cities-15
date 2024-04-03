import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStatus} from '../../const.ts';
import {checkAuthAction} from '../thunks/user.ts';

interface UserState {
  authStatus: AuthStatus;
}

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthAction.fulfilled, (state) => {
      state.authStatus = AuthStatus.Auth;
    });
    builder.addCase(checkAuthAction.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    });
  },
  selectors: {
    authStatus: (state) => state.authStatus,
  }
});

const userActions = {
  ...userSlice.actions,
  checkAuth: checkAuthAction,
};
const userSelectors = userSlice.selectors;

export { userSlice, userActions, userSelectors };
