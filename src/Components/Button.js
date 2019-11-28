import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    color: black;
`;

export const Button = (props) => {
    return (
        <ButtonWrapper>
            {props.title || 'click me'}
        </ButtonWrapper>
    );
};