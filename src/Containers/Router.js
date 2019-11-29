import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Login } from './Pages/Login';


export const AppRouters = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Router exect path="/">
                    <Redirect to="/login"/>
                    <Login/>
                </Router>
            </Switch>
        </Router>
    );
}