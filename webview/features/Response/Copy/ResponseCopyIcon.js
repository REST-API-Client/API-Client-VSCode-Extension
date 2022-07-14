import React from "react";
import { FiCopy } from "react-icons/fi";
import styled from "styled-components";

import useResponseDataStore from "../../../store/useResponseDataStore";
import vscode from "../../../vscode";

const ResponseCopyIcon = () => {
  const { data } = useResponseDataStore((state) => state.responseData);

  const handleCopyIconClick = () => {
    vscode.postMessage({ command: "Alert Copy" });

    navigator.clipboard.writeText(data);
  };

  return (
    <CopyIconWrapper>
      <FiCopy className="copyIcon" onClick={handleCopyIconClick} />
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

export default ResponseCopyIcon;
