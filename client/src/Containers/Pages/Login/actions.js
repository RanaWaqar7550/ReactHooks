import {
  USER_AUTHENTICATION_REQUEST,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_FAILED,
  USER_LOGOUT,
} from 'Utils/Constants';

export const userAuthentication = (payload) => ({
  type: USER_AUTHENTICATION_REQUEST,
  payload,
});

export const userAuthenticationSuccess = (payload) => ({
  type: USER_AUTHENTICATION_SUCCESS,
  payload,
});

export const userAuthenticationFailed = (error) => ({
  type: USER_AUTHENTICATION_FAILED,
  error,
});

export const userLogOut = () => ({
  type: USER_LOGOUT,
});
