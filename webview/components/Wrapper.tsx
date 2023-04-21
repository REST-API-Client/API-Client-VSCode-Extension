import React from "react";
import styled from "styled-components";
import { ICommonChildProps } from "./type";

const Wrapper = ({ children }: ICommonChildProps) => {
  return <ComponentWrapper>{children}</ComponentWrapper>;
};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  height: 35vh;
`;

export default Wrapper;
