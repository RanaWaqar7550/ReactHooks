import React from 'react';
import styled from 'styled-components';

import AppBackgroundImage from 'Images/app-background.svg';
import { AppRouters } from './Router';

const AppBackgroundWrapper = styled.div`
    background: url(${AppBackgroundImage});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const App = () => (
  <AppBackgroundWrapper>
    <AppRouters />
  </AppBackgroundWrapper>
);
