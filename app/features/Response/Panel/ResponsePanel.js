import React, { useEffect } from "react";
import styled from "styled-components";

import Loader from "../../../components/Loader";
import { RESPONSE } from "../../../constants/response";
import { FINISHED, LOADING } from "../../../constants/shared";
import useResponseDataStore from "../../../store/useResponseDataStore";
import ResponseEmptyMenu from "../EmptyResponse/EmptyResponse";
import ResponseMenu from "../Menu/ResponseMenu";

const ResponsePanel = () => {
  const { requestInProcess, handleResponseData, handleRequestProcessStatus } =
    useResponseDataStore((state) => state);

  const handleExtensionMessage = (event) => {
    // if (event.data.type === RESPONSE) {
    //   handleResponseData(event.data);
    //   handleRequestProcessStatus(FINISHED);
    // }
  };

  useEffect(() => {
    window.addEventListener("message", handleExtensionMessage);
  }, []);

  switch (requestInProcess) {
    case LOADING:
      return <Loader />;
    case FINISHED:
      return (
        <ResponsePanelWrapper>
          <ResponseMenu />
        </ResponsePanelWrapper>
      );
    default:
      return (
        <ResponsePanelWrapper>
          <ResponseEmptyMenu />
        </ResponsePanelWrapper>
      );
  }
};

const ResponsePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1rem 4.5rem 1.5rem 4.5rem;
`;

export default ResponsePanel;
