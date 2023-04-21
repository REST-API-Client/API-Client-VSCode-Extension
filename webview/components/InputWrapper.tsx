import React from "react";
import styled from "styled-components";
import { ICommonChildProps } from "./type";

const InputWrapper = ({ children }: ICommonChildProps) => {
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
    color: var(--default-text);
    background-color: transparent;
    opacity: 0.45;
  }

  .authInputBox {
    width: 28rem;
  }
`;

export default InputWrapper;
