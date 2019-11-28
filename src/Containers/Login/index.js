import React from 'react';
import styled from 'styled-components';

import { Input } from 'Components/InputField';
import { Button } from 'Components/Button';

const LoginWrapper = styled.div`
    border: 1px solid black;
    width: 15%;
    padding: 50px;
    margin: auto;
    margin-top: 15%;
    & input {
       display: block;
       margin: auto;
       border-radius: 8px;
        width: 257px;
        padding: 10px;
    }
`;
export const Login = () => {
    return (
        <LoginWrapper>
            <Input type="text"/>
            <Input type="text"/>
            <Button title="LOGIN"/>
        </LoginWrapper>
    );
}