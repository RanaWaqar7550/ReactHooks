import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    position: relative;
    top: 20px;
    border-radius: 10px;
    width: 100%;
    background: #b2b2d2;
    padding: 12px;
    color: black;
`;

export const Button = ({ onClick, title }) => (
  <ButtonWrapper onClick={onClick}>
    {title || 'BUTTON'}
  </ButtonWrapper>
);
