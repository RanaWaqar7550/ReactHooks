import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'sanitize.css';
import { App } from 'Containers/App';
import { configureStore } from 'Stores';


console.log('my name is waqar');
console.log('my name is waqar3');
console.log('my name is waqar 2');
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
