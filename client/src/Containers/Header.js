import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { Button } from 'Components/Button';
import { setPageTitle } from 'Utils/common';

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 10px;
    height: 10vh;
    border-radius: 10px;
    background: grey;
    
    & button {
        position: absolute;
        top: 35px;
        right: 15px;
        width: 10%;
    }
`;
const user = JSON.parse(localStorage.getItem('user'));

const Header = ({ children, location }) => {
  const [userLogout, setUserLogout] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUserLogout(true);
  };

  useEffect(() => setPageTitle('Chat'));

  if (userLogout) {
    return (
      <Redirect to={{
        pathname: '/login',
      }}
      />
    );
  }
  return (
    <HeaderWrapper>
      <h1>
Welcome
        {` ${location && location.state ? location.state.username : user.username}`}
      </h1>
      {children}
      <Button title="Logout" onClick={handleLogOut} />
    </HeaderWrapper>
  );
};

export { Header };
