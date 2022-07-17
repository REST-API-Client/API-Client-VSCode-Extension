import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { COMMON } from "../../../constants";
import useHeightStore from "../../../store/heightStore";
import useKeyValueTableStore from "../../../store/keyValueTableStore";
import useRequestStore from "../../../store/requestStore";
import useResponseDataStore from "../../../store/responseDataStore";
import vscode from "../../../vscode";
import RequestButton from "../Button/RequestButton";
import RequestDetailOption from "../Menu/RequestMenu";
import RequestMethod from "../Method/RequestMethod";
import RequestUrl from "../Url/RequestUrl";

const RequestPanel = () => {
  const requestMenuRef = useRef(height);
  const height = useHeightStore((state) => state.height);
  const keyValueData = useKeyValueTableStore(
    (state) => state.keyValueTableData,
  );
  const handleRequestProcessStatus = useResponseDataStore(
    (state) => state.handleRequestProcessStatus,
  );
  const requestData = useRequestStore(
    (state) => ({
      requestMethod: state.requestMethod,
      requestUrl: state.requestUrl,
      authOption: state.authOption,
      authData: state.authData,
      bodyOption: state.bodyOption,
      bodyRawOption: state.bodyRawOption,
      bodyRawData: state.bodyRawData,
    }),
    shallow,
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (requestData.requestUrl.length !== 0) {
      handleRequestProcessStatus(COMMON.LOADING);
    }

    vscode.postMessage({
      ...requestData,
      keyValueData,
    });
  };

  useEffect(() => {
    requestMenuRef.current.style.height = height;
  }, [height]);

  return (
    <RequestPanelWrapper ref={requestMenuRef}>
      <RequestMainForm onSubmit={handleFormSubmit}>
        <RequestMethod />
        <RequestUrl />
        <RequestButton />
      </RequestMainForm>
      <RequestDetailOption />
    </RequestPanelWrapper>
  );
};

const RequestPanelWrapper = styled.div`
  margin: 5.5rem 5rem 1.5rem 5rem;
  overflow: hidden;
`;

const RequestMainForm = styled.form`
  display: flex;
`;

export default RequestPanel;
