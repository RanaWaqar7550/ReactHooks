import React from 'react';
import styled from 'styled-components';

import { ChatWindow } from './Components/ChatWindow';
import { ChatUserSearch } from './Components/ChatUserSearch';

const ChatWrapper = styled.div`
    width: 100%;
    height: 87vh;
    position: relative;
    top: 5%;
    down: 2%;   
`;

const Chat = () => (
  <ChatWrapper>
    <ChatUserSearch />
    <ChatWindow />
  </ChatWrapper>
);

export { Chat };
