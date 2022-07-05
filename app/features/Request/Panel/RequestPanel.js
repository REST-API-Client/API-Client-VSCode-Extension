import React from "react";
import styled from "styled-components";

import RequestButton from "../Button/RequestButton";
import RequestMethod from "../Method/RequestMethod";
import RequestUrl from "../Url/RequestUrl";

function RequestPanel() {
  return (
    <RequestPanelWrapper>
      <RequestMainForm>
        <RequestMethod />
        <RequestUrl />
        <RequestButton />
      </RequestMainForm>
    </RequestPanelWrapper>
  );
}

const RequestPanelWrapper = styled.div`
  overflow: hidden;
  margin: 5.5rem 5rem 1.5rem 5rem;
`;

const RequestMainForm = styled.form`
  display: flex;
`;

export default RequestPanel;
