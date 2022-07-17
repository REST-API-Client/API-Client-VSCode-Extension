import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ResponsePreview = ({ sourceCode }) => {
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
    height: 65vh;
    background: white;
    overflow: scroll;
  }
`;

ResponsePreview.propTypes = {
  sourceCode: PropTypes.string,
};

export default ResponsePreview;
