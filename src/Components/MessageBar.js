import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
    width: 110%;
    padding: 15px;
    color: gray;
    background: #65352dfa;
    border-radius: 10px;
`;

export const MessageBar = (props) => {
    return (
        <MessageWrapper id="messageBar">
            {props.message}
        </MessageWrapper>
    );
};
