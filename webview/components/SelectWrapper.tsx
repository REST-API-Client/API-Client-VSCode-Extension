import React from "react";
import styled from "styled-components";
import { ISelectWrapperProps, ISelectWrapperStyledProps } from "./type";

const SelectWrapper = ({
  children,
  requestMenu,
  primary,
  secondary,
}: ISelectWrapperProps) => {
  return (
    <SelectWrapperContainer
      primary={primary}
      secondary={secondary}
      border={requestMenu}
    >
      {children}
    </SelectWrapperContainer>
  );
};

const SelectWrapperContainer = styled.div<ISelectWrapperStyledProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.secondary && "space-around"};
  width: ${(props) => props.secondary && "100%"};
  margin-left: ${(props) => props.primary && "auto"};
  padding-bottom: ${(props) => (props.border ? "0.8rem" : "")};
  border-bottom: ${(props) =>
    props.border ? "0.08rem solid rgba(255, 255, 255, 0.3)" : ""};

  h3 {
    opacity: 0.93;
  }

  .variantsLabel {
    margin-left: 1.5rem;
  }
`;

export default SelectWrapper;
