import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from 'Components/InputField';
import { Button } from 'Components/Button';
import { MessageBar } from 'Components/MessageBar';
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

export const Login = () => {
    setPageTitle('Login');

    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ showMessageBar, setShowMessageBar ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);

    const settingEmail = (ev) => {
        const { value: inputEmailValue } = ev.target;
        setEmail(inputEmailValue);
    };

    const settingPassword = (ev) => {
        const { value: inputPassValue } = ev.target;
        setPassword(inputPassValue);
    };

    const doLoginApp = (event) => {
        event.preventDefault();
        setShowMessageBar(true);
        if(email === 'waqar' && password === '123'){
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };

    return (
        <LoginWrapper>
            {showMessageBar ? (<MessageBar message={isLogin ? 'Login successfully' : 'Email or Password is incorrect'}/>)
                : (<></>)}
            <form onSubmit={doLoginApp}>
                <Input type="text" placeholder="Email" onChange={settingEmail} />
                <Input type="password" placeholder="Password" onChange={settingPassword} />
                <Button title="LOGIN" onClick={doLoginApp}/>
            </form>
        </LoginWrapper>
    );
};