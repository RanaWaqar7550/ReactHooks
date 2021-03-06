import {
  USER_AUTHENTICATION_REQUEST,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_FAILED,
  USER_LOGOUT,
} from 'Utils/Constants';

const initialState = {
  error: null,
  data: null,
  message: null,
  loading: false,
  loginToken: null,
};
export const LoginReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case USER_AUTHENTICATION_REQUEST:
      return { ...state, ...action, loading: true };
    case USER_AUTHENTICATION_SUCCESS:
      localStorage.setItem('authToken', payload.token);
      localStorage.setItem('user', JSON.stringify(payload.data));
      return {
        ...state,
        ...payload,
        userData: payload.data,
        loading: false,
        error: false,
        loginToken: payload.token,
      };
    case USER_AUTHENTICATION_FAILED:
      return {
        ...state, error: true, message: action.error.message, loading: false,
      };
    case USER_LOGOUT:
      return { ...initialState };
    default:
      return { ...state };
  }
};
