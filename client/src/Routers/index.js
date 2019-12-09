import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

// import { Login } from 'Containers/Pages/Login/index';
import { Chat } from 'Containers/Pages/Chat/index';
import { PrivateRouter } from './privateRouter';


export const AppRouters = () => (
  <Router>
    <Switch>
      <PrivateRouter exect path={['/chat', '/login', '/']} component={Chat} />
    </Switch>
  </Router>
);
