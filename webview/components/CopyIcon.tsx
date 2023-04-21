import React from "react";
import { FiCopy } from "react-icons/fi";
import styled from "styled-components";
import { ICopyIconProps } from "./type";

const CopyIcon = ({ handleClick, value }: ICopyIconProps) => {
  return (
    <CopyIconWrapper>
      <FiCopy
        className="copyIcon"
        role="button"
        onClick={() => handleClick(value)}
      />
    </CopyIconWrapper>
  );
};

const CopyIconWrapper = styled.div`
  margin-left: auto;

  .copyIcon {
    font-size: 1.3rem;
    margin-right: 1.7rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    :hover {
      opacity: 0.7;
      transform: scale(1.15);
    }
  }
`;

export default CopyIcon;
