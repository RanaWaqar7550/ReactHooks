import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
    border-radius: 10px;
    width: 100%;
   position: relative;
   margin: auto;
   display: inline;
   padding: 10px;
   color: #1b1a3c;
   font-size: 15px;
   &:focus {
     outline: none;
   
   }
`;

export const Input = ({ type, placeholder, onChange }) => (
  <InputWrapper type={type} placeholder={placeholder} onChange={onChange} />
);
