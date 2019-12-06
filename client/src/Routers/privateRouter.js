/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import { Header } from 'Containers/Header';

export const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (localStorage.getItem('authToken') ? (
      <Header>
        <Component {...props} />
      </Header>
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))}
  />
);
