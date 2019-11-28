import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Login } from './Login';
import styled from 'styled-components';
import AppImage from 'Images/app-background.svg';

const AppWrapper = styled.div`
    background: url(${AppImage});
    display: flex;
`;
export const AppRouters = () => {
    return (
        <Router>
            <AppWrapper>
                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Router exect path="/">
                        <Redirect to="/login"/>
                        <Login/>
                    </Router>
                </Switch>
            </AppWrapper>
        </Router>
    );
}