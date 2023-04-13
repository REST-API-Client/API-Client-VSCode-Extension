import React from "react";
import styled from "styled-components";

interface IResponsePreviewProps {
  sourceCode: string;
}

const ResponsePreview = ({ sourceCode }: IResponsePreviewProps) => {
  return (
    <IframeWrapper>
      <iframe title="Response Data Preview" srcDoc={sourceCode} />
    </IframeWrapper>
  );
};

const IframeWrapper = styled.div`
  width: 100%;
  height: 65vh;

  iframe {
    width: 100%;
    height: 55vh;
    background: white;
    overflow: scroll;
  }
`;

export default ResponsePreview;
