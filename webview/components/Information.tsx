import React, { ReactNode } from "react";
import styled from "styled-components";

interface TInformationProps {
  children: ReactNode;
  textColor: string;
}

const Information = ({ children, textColor }: TInformationProps) => {
  return (
    <InformationWrapper textColor={textColor}>{children}</InformationWrapper>
  );
};

const InformationWrapper = styled.div<{ textColor: string }>`
  display: flex;
  align-items: center;
  transition: opacity 0.15s ease-in-out;

  h4 {
    font-weight: 500;
    color: ${(props) => props.textColor};
  }

  p {
    width: 100%;
    font-weight: 200;
    word-break: break-all;
    white-space: normal;
    line-height: 1.25;
    opacity: 0.85;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }

  .methodContainer {
    margin-right: 1rem;
    user-select: none;
  }
`;

export default Information;
