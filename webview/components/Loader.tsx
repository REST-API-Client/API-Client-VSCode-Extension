import React from "react";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

import { OPTION } from "../constants";

const Loader = () => {
  return (
    <LoaderWrapper>
      <h2>Sending request...</h2>
      <SyncLoader
        className="loader"
        color="var(--vscode-foreground)"
        speedMultiplier={0.5}
        margin="0.35rem"
        size="0.85rem"
        cssOverride={OPTION.LOADER_CSS_OPTIONS}
      />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35vh;

  h2 {
    margin: 6.5rem 0 2.2rem 0;
    opacity: 0.85;
  }
`;

export default Loader;
