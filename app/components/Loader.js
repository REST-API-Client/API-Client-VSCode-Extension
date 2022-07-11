import React from "react";
import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const Loader = () => {
  const css = {
    opacity: "0.85",
  };

  return (
    <LoaderWrapper>
      <PropagateLoader
        color="var(--vscode-foreground)"
        speedMultiplier="1"
        size="22"
        cssOverride={css}
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
