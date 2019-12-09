/* eslint-disable react/jsx-props-no-spreading, no-restricted-globals, no-nested-ternary */
import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import { Header } from 'Containers/Header';
import { Login } from 'Containers/Pages/Login';
import { Chat } from 'Containers/Pages/Chat';

export const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (localStorage.getItem('authToken') ? (location.pathname.match(/\/|\/login/g).length ? (
      <>
        <Redirect to="/chat" />
        <Header>
          <Chat />
        </Header>
      </>
    ) : (
      <Header>
        <Component {...props} />
      </Header>
    )) : (
      <>
        <Redirect to="/login" />
        <Route path="/login" component={Login} />
      </>
    ))}
  />
);
