import { takeEvery, put, select } from 'redux-saga/effects';

import {
  USER_AUTHENTICATION_REQUEST,
} from 'Utils/Constants';
import { userAuthenticationSuccess, userAuthenticationFailed } from 'Pages/Login/actions';
import { requestAPI } from 'Utils/Requests';

function getLoginRequestPayload({ login }) {
  return login.payload;
}

function* loginUser() {
  try {
    const payload = yield select(getLoginRequestPayload);
    const response = yield requestAPI('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    yield put(userAuthenticationSuccess(response));
  } catch (error) {
    yield put(userAuthenticationFailed(error));
  }
}

export function* rootLoginSaga() {
  yield takeEvery(USER_AUTHENTICATION_REQUEST, loginUser);
}
