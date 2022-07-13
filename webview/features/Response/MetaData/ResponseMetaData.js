import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {
  META_DATA,
  RESPONSE_RESULT_INFORMATION,
} from "../../../constants/response";

const ResponseMetaData = ({
  responseSize,
  requestTime,
  statusCode,
  statusText,
}) => {
  const time = `${requestTime}ms`;
  const statusCodeAndText = `${statusCode} ${statusText}`;
  const size = `${(responseSize / 10000).toFixed(2)} KB`;

  return (
    <ResponseMetaDataContainer>
      {RESPONSE_RESULT_INFORMATION.map((option, index) => (
        <MetaDataContainer
          secondary={index === 0 && statusCode === 404}
          key={META_DATA + index}
          currentOption={index}
          menuOption={option}
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

const MetaDataContainer = styled.div`
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

ResponseMetaData.propTypes = {
  statusCode: PropTypes.number.isRequired,
  statusText: PropTypes.string.isRequired,
  requestTime: PropTypes.number.isRequired,
  responseSize: PropTypes.number,
};

export default ResponseMetaData;
