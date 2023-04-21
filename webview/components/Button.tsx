import React from "react";
import styled from "styled-components";

import { COMMON } from "../constants";
import { IButtonProps, IButtonStyledProps } from "./type";

const Button = ({
  children,
  buttonType,
  buttonStatus,
  primary,
  handleButtonClick,
}: IButtonProps) => {
  return (
    <ButtonWrapper
      primary={primary}
      type={buttonType}
      onClick={handleButtonClick}
      disabled={buttonStatus === COMMON.LOADING}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<IButtonStyledProps>`
  width: ${(props) => (props.primary ? "8rem" : "12rem")};
  margin-left: ${(props) => (props.primary ? "1rem" : "2.7rem")};
  font-size: 1.2rem;
  font-weight: 500;
  background-color: ${(props) =>
    props.primary ? "rgb(14, 99, 156)" : "var(--vscode-input-background)"};
  transition: background-color 0.2s ease-in-out;
`;

export default Button;
