import React from "react";
import styled from "styled-components";

import { START_APP } from "../../../constants/sidebar";
import vscode from "../../../vscode";

const SidebarGuideMenu = () => {
  const handleButtonClick = () => {
    vscode.postMessage({ command: START_APP });
  };

  return (
    <GuideMenuWrapper>
      <p>To start sending HTTP requests, press the `Open Menu` button below.</p>
      <button onClick={handleButtonClick}>Open Menu</button>
    </GuideMenuWrapper>
  );
};

const GuideMenuWrapper = styled.div`
  p {
    margin-top: 1.3rem;
    color: rgb(97, 97, 97);
    line-height: 18px;
  }

  button {
    margin-top: 1rem;
  }
`;

export default SidebarGuideMenu;
