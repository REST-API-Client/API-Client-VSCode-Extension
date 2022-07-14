import React from "react";
import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

import { OPTION } from "../constants";

const Loader = () => {
  return (
    <LoaderWrapper>
      <PropagateLoader
        color="var(--vscode-foreground)"
        speedMultiplier="1"
        size="22px"
        cssOverride={OPTION.LOADER_CSS_OPTIONS}
      />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vh;
`;

export default Loader;
