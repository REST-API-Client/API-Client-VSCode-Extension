import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const InputWrapper = ({ children }) => {
  return <InputWrapperContainer>{children}</InputWrapperContainer>;
};

const InputWrapperContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  label {
    margin: 0 1rem;
    font-size: 1.2rem;
    opacity: 0.95;
  }

  input {
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
    border-radius: 0.3rem;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    background-color: transparent;
    color: var(--default-text);
    opacity: 0.45;
  }

  .authInputBox {
    width: 28rem;
  }
`;

InputWrapper.propTypes = {
  children: PropTypes.node,
};

export default InputWrapper;
