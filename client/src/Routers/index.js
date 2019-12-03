import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Login } from 'Containers/Pages/Login/index';


export const AppRouters = () => (
  <Router>
    <Switch>
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
