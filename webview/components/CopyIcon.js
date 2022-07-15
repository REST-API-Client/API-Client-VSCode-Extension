import PropTypes from "prop-types";
import React from "react";
import { FiCopy } from "react-icons/fi";
import styled from "styled-components";

import { COMMON } from "../constants";
import vscode from "../vscode";

const CopyIcon = ({ value }) => {
  const handleCopyIconClick = () => {
    vscode.postMessage({ command: COMMON.ALERT_COPY });

    navigator.clipboard.writeText(value);
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

CopyIcon.propTypes = {
  value: PropTypes.string,
};

export default CopyIcon;
