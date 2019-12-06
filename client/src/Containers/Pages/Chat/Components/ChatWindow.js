import React from 'react';

import styled from 'styled-components';

import { Input } from 'Components/InputField';

const ChatWindowWrapper = styled.div`
    background: black;
    width: 77%;
    height: 87vh;    
    position: absolute;
    left: 22%;
    
    & input {
        position: absolute;
        top: 94%;
    }
`;

const ChatWindow = () => (
  <ChatWindowWrapper>
    <Input placeholder="Write Text Message ..." />
  </ChatWindowWrapper>

);


export { ChatWindow };
