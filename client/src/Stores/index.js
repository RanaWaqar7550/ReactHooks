/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'Reducers';
import { rootLoginSaga } from 'Pages/Login/sagas';

const saga = createSagaMiddleware();
export const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(saga),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  saga.run(rootLoginSaga);
  return store;
};
