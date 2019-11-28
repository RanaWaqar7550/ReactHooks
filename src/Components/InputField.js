import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
    border-radis: 10px;
`;

export const Input = (props) => {
    return (
        <InputWrapper type={props.type}/>
    );
};