import React from 'react';
import styled from 'styled-components';

import { Input } from 'Components/InputField';

const ChatUserWrapper = styled.div`
    background: red;
    width: 20%;
    height: 87vh;
    position: absolute;
    left: 1%;
`;

const ChatUserSearch = () => (
  <ChatUserWrapper>
    <Input placeholder="Search user ..." />
  </ChatUserWrapper>
);

export { ChatUserSearch };
