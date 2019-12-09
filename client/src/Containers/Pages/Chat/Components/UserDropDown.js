import React from 'react';
import styled from 'styled-components';

const DropDownWrapper = styled.div`
    background: black;
    width: 98%;
    margin: auto;
    height: 22vh;
    overflow: auto;
    margin-top: 3px;
    & span {
        display: block;
        padding: 8px;
        color: white;
        text-align: center;
    }
    & span:hover {
      background: white;
      color: black;
      cursor: pointer;
    }
`;

export const UserDropDown = ({ userList }) => (
  <DropDownWrapper>
    {
            userList.length ? userList.map((userData) => (
              <div>
                <span>
                  {userData.username}
                </span>
                <hr />
              </div>
            )) : (
              <span>No user found ...</span>
            )
        }
  </DropDownWrapper>
);
