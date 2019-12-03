import React from 'react';
import styled from 'styled-components';

import closeIcon from 'Images/close.svg';

const MessageWrapper = styled.div`
    width: 110%;
    padding: 15px;
    color: gray;
    background: #65352dfa;
    border-radius: 10px;
    
    & img {
       width: 8px;
       position: absolute;
       left: 92%;
       top: 42%;
       filter: invert(2);
    }
    
    & img:hover {
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        background: #e6c3c3;
        filter: blur(1.5px);
    }
`;

export const MessageBar = ({ message, closeButtonClickHandler }) => (
  <MessageWrapper id="messageBar">
    {message}
    <img src={closeIcon} alt="close button" onClick={closeButtonClickHandler} />
  </MessageWrapper>
);
