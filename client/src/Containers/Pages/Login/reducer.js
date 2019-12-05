import {
  USER_AUTHENTICATION_REQUEST,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_FAILED,
} from 'Utils/Constants';

const initialState = {
  error: null,
  data: null,
  message: null,
  loading: false,
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHENTICATION_REQUEST:
      return { ...state, ...action, loading: true };
    case USER_AUTHENTICATION_SUCCESS:
      return {
        ...state, ...action, loading: false, error: false,
      };
    case USER_AUTHENTICATION_FAILED:
      return {
        ...state, error: true, message: action.error.message, loading: false,
      };
    default:
      return { ...state };
  }
};
