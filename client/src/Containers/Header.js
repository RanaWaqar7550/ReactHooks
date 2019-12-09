import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button } from 'Components/Button';
import { userLogOut } from 'Containers/Pages/Login/actions';
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

const CommonHeader = ({ children, userLoginData, userDoLogout }) => {
  const [userLogout, setUserLogout] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    userDoLogout();
    setUserLogout(true);
  };

  useEffect(() => setPageTitle('Chat'));

  if (userLogout) {
    return (<Redirect to="/login" />);
  }

  const userData = userLoginData || user;
  const { username = '' } = userData || {};

  return (
    <HeaderWrapper>
      <h1>
Welcome
        {` ${username}`}
      </h1>
      {children}
      <Button title="Logout" onClick={handleLogOut} />
    </HeaderWrapper>
  );
};

const mapStateToProps = ({ login }) => ({
  userLoginData: login.data,
});

const mapDispatchToProps = (dispatch) => ({
  userDoLogout: () => dispatch(userLogOut()),
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(CommonHeader);
