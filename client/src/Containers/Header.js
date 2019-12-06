import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 10px;
    height: 10vh;
    border-radius: 10px;
    background: grey;
`;

const Header = ({ children }) => (
  <HeaderWrapper>
    <h1>Header</h1>
    {children}
  </HeaderWrapper>
);

export { Header };
