import React, { ReactNode } from "react";
import styled from "styled-components";

interface TDetailOptionProps {
  children: ReactNode;
  requestMenu?: boolean;
}

const DetailOption = ({ children, requestMenu }: TDetailOptionProps) => {
  return (
    <DetailOptionWrapper purpose={requestMenu}>{children}</DetailOptionWrapper>
  );
};

const DetailOptionWrapper = styled.div<{ purpose?: boolean }>`
  display: flex;
  align-items: center;
  margin: ${(props) =>
    props.purpose ? " 1.7rem 4.7rem 2.3rem 0" : "0 0 1.7rem 0"};

  p {
    padding-bottom: 0.35rem;
    color: rgb(66 245 66);
    transform: translateX(-0.7rem);
    user-select: none;
  }
`;

export default DetailOption;
