import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from 'Components/InputField';
import { UserDropDown } from './UserDropDown';

const ChatUserWrapper = styled.div`
    background: red;
    width: 20%;
    height: 87vh;
    position: absolute;
    left: 1%;
`;

const ChatUserSearch = () => {
  const [userList] = useState([{
    username: 'Ali',
  }, {
    username: 'Rizwan',
  }, {
    username: 'waqas',
  }, {
    username: 'hassan',
  }]);
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const handleSearchUser = (event) => {
    const { value: searchValue } = event.target;
    if (searchValue) {
      setIsShowDropDown(true);
    } else {
      setIsShowDropDown(false);
    }
  };

  return (
    <ChatUserWrapper>
      <Input placeholder="Search user ..." onChange={handleSearchUser} />
      {
        isShowDropDown ? (
          <UserDropDown userList={userList} />
        ) : (<></>)
      }
    </ChatUserWrapper>
  );
};

export { ChatUserSearch };
