import React, { useEffect } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { PARAMS } from "../../../constants/request";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import {
  generateParameterString,
  removeUrlParameter,
} from "../../../utils/utils";

const RequestUrl = () => {
  const { requestOption, requestUrl, handleRequestUrlChange } = useRequestStore(
    (state) => ({
      requestOption: state.requestOption,
      requestUrl: state.requestUrl,
      handleRequestUrlChange: state.handleRequestUrlChange,
    }),
    shallow,
  );
  const keyValueTableData = useKeyValueTableStore(
    (state) => state.keyValueTableData,
  );

  useEffect(() => {
    if (requestOption !== PARAMS) return;

    const filteredData = keyValueTableData.filter(
      (data) => data.optionType === PARAMS && data.isChecked,
    );

    if (filteredData.length === 0) {
      const parameterRemovedUrl = removeUrlParameter(requestUrl);

      handleRequestUrlChange(parameterRemovedUrl);

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
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestUrl;
