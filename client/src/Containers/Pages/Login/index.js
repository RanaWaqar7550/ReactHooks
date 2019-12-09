import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { Input } from 'Components/InputField';
import { Button } from 'Components/Button';
import { MessageBar } from 'Components/MessageBar';
import { userAuthentication } from 'Pages/Login/actions';
// import { Chat } from 'Pages/Chat/index';
import { setPageTitle } from 'Utils/common';


const LoginWrapper = styled.div`
    background: #4e3939;
    border: 11px inset #e4cdd5;
    width: 20%;
    padding: 70px;
    margin: auto;
    position: relative;
    top: 32%;
    right: 20px;
    border-radius: 10px;
    
    & input:focus{
        width: 105%;
        padding: 15px;
    }
    & input:nth-last-child(2){
        top: 20px
    }
    & button {
        margin-top: 30px;    
    }
    
    & button:hover {
        background: #982575;
        color: white;
    }
    
    & div#messageBar {
        position: relative;
        bottom: 25px;
        right: 10px;
    }
`;

const LoginPage = (props) => {
  const {
    error, message, loading, loginToken,
  } = props;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showMessageBar, setShowMessageBar] = useState(false);

  const authToken = localStorage.getItem('authToken');
  useEffect(() => {
    setPageTitle('Login');
  });

  const settingEmail = (ev) => {
    const { value: inputEmailValue } = ev.target;
    setEmail(inputEmailValue);
  };

  const settingPassword = (ev) => {
    const { value: inputPassValue } = ev.target;
    setPassword(inputPassValue);
  };

  const closeMessageBar = () => {
    setShowMessageBar(false);
  };

  const doLoginApp = (event) => {
    event.preventDefault();
    props.userloginAuthentication({ email, password });
    setShowMessageBar(true);
  };
  if (!error && (loginToken || authToken)) {
    return (
      <Redirect to="/chat" />
    );
  }

  return (
    <LoginWrapper>
      {
                showMessageBar
                  ? (
                    <MessageBar
                      closeButtonClickHandler={closeMessageBar}
                      message={!error ? 'Login successfully' : message}
                    />
                  )
                  : (<></>)
      }
      <form onSubmit={doLoginApp}>
        <Input type="text" placeholder="Email" onChange={settingEmail} />
        <Input type="password" placeholder="Password" onChange={settingPassword} />
        <Button title={loading ? 'LOADING ...' : 'LOGIN'} onClick={doLoginApp} />
      </form>
    </LoginWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userloginAuthentication: (payload) => dispatch(userAuthentication(payload)),
});

const mapStateToProps = ({ login }) => ({
  error: login.error,
  userData: login.data,
  message: login.message,
  loading: login.loading,
  loginToken: login.loginToken,
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
