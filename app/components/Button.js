import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function Button({ children, buttonPurpose }) {
  return <ButtonWrapper type={buttonPurpose}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  margin-left: 1rem;
  width: 8rem;
  font-size: 1.2rem;
  background-color: rgb(14, 99, 156);
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: rgba(14, 99, 156, 0.5);
  }
`;

Button.propTypes = {
  children: PropTypes.node,
  buttonPurpose: PropTypes.string,
};

export default Button;
