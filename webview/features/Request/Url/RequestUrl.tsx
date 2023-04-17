import React, { useEffect } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";
import { generateParameterString, removeUrlParameter } from "../../../utils";

const RequestUrl = () => {
  const {
    requestUrl,
    requestOption,
    keyValueTableData,
    handleRequestUrlChange,
  } = useStore(
    (state) => ({
      requestUrl: state.requestUrl,
      requestOption: state.requestOption,
      keyValueTableData: state.keyValueTableData,
      handleRequestUrlChange: state.handleRequestUrlChange,
    }),
    shallow,
  );

  useEffect(() => {
    if (requestOption !== REQUEST.PARAMS) return;

    const filteredData = keyValueTableData.filter(
      (data) => data.optionType === REQUEST.PARAMS && data.isChecked,
    );

    if (filteredData.length === 0) {
      const parameterRemovedUrl = removeUrlParameter(requestUrl);

      if (parameterRemovedUrl) {
        handleRequestUrlChange(parameterRemovedUrl);
      }

      return;
    }

    const parameterString = generateParameterString(filteredData);
    const parameterRemovedUrl = removeUrlParameter(requestUrl);
    const newUrlWithParams = parameterRemovedUrl + parameterString;

    handleRequestUrlChange(newUrlWithParams);
  }, [keyValueTableData]);

  return (
    <InputContainer
      placeholder="Enter Request URL"
      value={requestUrl}
      onChange={(event) => handleRequestUrlChange(event.target.value)}
    />
  );
};

const InputContainer = styled.input`
  padding-left: 1.5rem;
  font-size: 1.15rem;
  background-color: var(--vscode-editor-background);
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestUrl;
