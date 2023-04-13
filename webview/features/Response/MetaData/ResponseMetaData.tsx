import React from "react";
import styled from "styled-components";

import { OPTION, RESPONSE } from "../../../constants";

interface IResponseMetaDataProps {
  responseSize: number;
  requestTime: number;
  statusCode: number;
  statusText: string;
}

const ResponseMetaData = ({
  responseSize,
  requestTime,
  statusCode,
  statusText,
}: IResponseMetaDataProps) => {
  const time = `${requestTime}ms`;
  const statusCodeAndText = `${statusCode} ${statusText}`;
  const size = `${(responseSize / 10000).toFixed(2)} KB`;

  return (
    <ResponseMetaDataContainer>
      {OPTION.RESPONSE_RESULT_INFORMATION.map((option, index) => (
        <MetaDataContainer
          secondary={index === 0 && statusCode === 404}
          key={RESPONSE.META_DATA + index}
        >
          <span>{option}:</span>
          <span className="metaDataColor">
            {index === 0 ? statusCodeAndText : index === 2 ? size : time}
          </span>
        </MetaDataContainer>
      ))}
    </ResponseMetaDataContainer>
  );
};

const ResponseMetaDataContainer = styled.div`
  display: flex;
  margin: 0 0 0 auto;
`;

const MetaDataContainer = styled.div<{ secondary: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 0.7rem;
  padding-bottom: 0.35rem;

  span {
    margin-left: 0.2rem;
    font-weight: 400;
  }

  .metaDataColor {
    color: ${(props) =>
      props.secondary ? "rgb(255 100 100)" : "rgb(66 245 66)"};
    font-weight: 300;
  }
`;

export default ResponseMetaData;
