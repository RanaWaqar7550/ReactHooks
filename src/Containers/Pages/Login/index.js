import React from 'react';
import styled from 'styled-components';

import { Input } from 'Components/InputField';
import { Button } from 'Components/Button';
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
    & input:nth-last-child(2){
        top: 20px
    }
    & button {
        margin-top: 30px;
        
    }
`;
export const Login = () => {
    setPageTitle('Login');
    return (
        <LoginWrapper>
            <Input type="text" placeholder="Email"/>
            <Input type="text" placeholder="Password"/>
            <Button title="LOGIN"/>
        </LoginWrapper>
    );
};