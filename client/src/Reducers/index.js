import { combineReducers } from 'redux';

import { LoginReducer } from 'Pages/Login/reducer';

export const rootReducer = combineReducers({ login: LoginReducer });
