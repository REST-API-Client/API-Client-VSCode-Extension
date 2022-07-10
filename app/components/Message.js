import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import emptyComponentIcon from "../assets/empty.svg";

const Message = ({ children }) => {
  return (
    <MessageWrapper>
      {children}
      <img src={emptyComponentIcon} alt="Empty Component Icon" />
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.5rem;

  p {
    margin: 0.7rem 0;
    opacity: 0.65;
  }

  img {
    width: 2.5rem;
    margin-top: 1rem;
    opacity: 0.7;
  }
`;

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;
