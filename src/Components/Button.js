import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    position: relative;
    top: 20px;
    border-radius: 10px;
    width: 100%;
    background: blue;
    padding: 12px;
    color: black;
`;

export const Button = (props) => {
    return (
        <ButtonWrapper>
            {props.title || 'BUTTON'}
        </ButtonWrapper>
    );
};