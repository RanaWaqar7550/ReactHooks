import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Login } from 'Containers/Pages/Login/index';
import { Chat } from 'Containers/Pages/Chat/index';
import { PrivateRouter } from './privateRouter';


export const AppRouters = () => (
  <Router>
    <Switch>
      <PrivateRouter exect path="/chat" component={Chat} />
      <Route exact path="/login">
        <Login />
      </Route>
      <Router exect path="/">
        <Redirect to="/login" />
        <Login />
      </Router>
    </Switch>
  </Router>
);
