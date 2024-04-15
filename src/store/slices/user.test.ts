import {AuthStatus, RequestStatus} from '../../const.ts';
import {userSelectors, userSlice} from './user.ts';
import {getMockUserAuthData, getMockUserInfo} from '../../mocks/user.ts';
import {checkAuthAction, loginAction, logoutAction} from '../thunks/user.ts';

describe('User slice', () => {
  const initialState = {
    authStatus: AuthStatus.Unknown,
    requestStatus: RequestStatus.Idle,
    userInfo: null,
    userAuthData: null,
  };
  const testEmail = 'test@test.com';
  const testUserInfo = getMockUserInfo(testEmail);
  const testUserAuthData = getMockUserAuthData(testEmail);

  describe('Reducers', () => {
    const testState = {
      authStatus: AuthStatus.Auth,
      requestStatus: RequestStatus.Succeed,
      userInfo: null,
      userAuthData: null,
    };
    const testNoAuthState = {
      authStatus: AuthStatus.NoAuth,
      requestStatus: RequestStatus.Idle,
      userInfo: null,
      userAuthData: null,
    };


    it('should return initial state with undefined state and empty action', () => {
      const emptyAction = {type: ''};

      const result = userSlice.reducer(undefined, emptyAction);
      expect(result).toEqual(initialState);
    });

    it('should return expected state with expected state and empty action', () => {
      const emptyAction = {type: ''};

      const result = userSlice.reducer(testState, emptyAction);
      expect(result).toEqual(testState);
    });

    it('should return expected state with initial state and expected activeOffer', () => {

      const result = userSlice.reducer(initialState, {type: 'user/setNoAuthStatus'});
      expect(result).toEqual(testNoAuthState);
    });
  });

  describe('Extra reducers', () => {
    it('should set RequestStatus to Loading with checkAuthAction.pending', () => {
      const expectedState = {
        authStatus: AuthStatus.Unknown,
        requestStatus: RequestStatus.Loading,
        userInfo: null,
        userAuthData: null,
      };

      const result = userSlice.reducer(undefined, checkAuthAction.pending('', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should set authStatus to Auth, requestStatus to Succeed, add userInfo with checkAuthAction.fulfilled', () => {
      const expectedState = {
        authStatus: AuthStatus.Auth,
        requestStatus: RequestStatus.Succeed,
        userInfo: testUserInfo,
        userAuthData: null,
      };

      const result = userSlice.reducer(undefined, checkAuthAction.fulfilled(testUserInfo, '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should set authStatus to NoAuth, requestStatus to Failed with checkAuthAction.rejected', () => {
      const expectedState = {
        authStatus: AuthStatus.NoAuth,
        requestStatus: RequestStatus.Failed,
        userInfo: null,
        userAuthData: null,
      };

      const result = userSlice.reducer(undefined, checkAuthAction.rejected(new Error(), '', undefined));
      expect(result).toEqual(expectedState);
    });

    //todo loginAction.fulfilled

    it('should set authStatus to NoAuth, requestStatus to Failed with loginAction.rejected', () => {
      const expectedState = {
        authStatus: AuthStatus.NoAuth,
        requestStatus: RequestStatus.Failed,
        userInfo: null,
        userAuthData: null,
      };

      const result = userSlice.reducer(undefined, loginAction.rejected(new Error(), '', {email: '', password: ''}));
      expect(result).toEqual(expectedState);
    });

    it('should set authStatus to NoAuth, requestStatus to Succeed, userInfo set null with logoutAction.fulfilled', () => {
      const initTestState = {
        authStatus: AuthStatus.Auth,
        requestStatus: RequestStatus.Succeed,
        userInfo: testUserInfo,
        userAuthData: null,
      };
      const expectedState = {
        authStatus: AuthStatus.NoAuth,
        requestStatus: RequestStatus.Succeed,
        userInfo: null,
        userAuthData: null,
      };

      const result = userSlice.reducer(initTestState, logoutAction.fulfilled('', '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should set authStatus to NoAuth, requestStatus to Failed, userInfo set null with logoutAction.rejected', () => {
      const initTestState = {
        authStatus: AuthStatus.Auth,
        requestStatus: RequestStatus.Succeed,
        userInfo: testUserInfo,
        userAuthData: null,
      };
      const expectedState = {
        authStatus: AuthStatus.NoAuth,
        requestStatus: RequestStatus.Failed,
        userInfo: null,
        userAuthData: null,
      };

      const result = userSlice.reducer(initTestState, logoutAction.rejected(new Error(), '', undefined));
      expect(result).toEqual(expectedState);
    });
  });

  describe('Selectors', () => {
    const testState = {
      [userSlice.name]: {
        authStatus: AuthStatus.Auth,
        requestStatus: RequestStatus.Succeed,
        userInfo: testUserInfo,
        userAuthData: testUserAuthData,
      }
    };

    it('should return authStatus from state', () => {
      const {authStatus} = testState[userSlice.name];
      const result = userSelectors.authStatus(testState);
      expect(result).toBe(authStatus);
    });

    it('should return requestStatus from state', () => {
      const {requestStatus} = testState[userSlice.name];
      const result = userSelectors.requestStatus(testState);
      expect(result).toBe(requestStatus);
    });

    it('should return userInfo from state', () => {
      const {userInfo} = testState[userSlice.name];
      const result = userSelectors.userInfo(testState);
      expect(result).toBe(userInfo);
    });

    it('should return userAuthData from state', () => {
      const {userAuthData} = testState[userSlice.name];
      const result = userSelectors.userAuthData(testState);
      expect(result).toBe(userAuthData);
    });
  });
});
