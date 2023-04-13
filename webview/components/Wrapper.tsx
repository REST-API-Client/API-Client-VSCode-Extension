import React, { ReactNode } from "react";
import styled from "styled-components";

interface TWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: TWrapperProps) => {
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
