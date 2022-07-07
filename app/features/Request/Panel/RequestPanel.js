import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import useHeightStore from "../../../store/useHeightStore";
import RequestButton from "../Button/RequestButton";
import RequestDetailOption from "../Menu/RequestMenu";
import RequestMethod from "../Method/RequestMethod";
import RequestUrl from "../Url/RequestUrl";

function RequestPanel() {
  const requestMenuRef = useRef(height);
  const height = useHeightStore((state) => state.height);

  useEffect(() => {
    requestMenuRef.current.style.height = height;
  }, [height]);

  return (
    <RequestPanelWrapper ref={requestMenuRef}>
      <RequestMainForm>
        <RequestMethod />
        <RequestUrl />
        <RequestButton />
      </RequestMainForm>
      <RequestDetailOption />
    </RequestPanelWrapper>
  );
}

const RequestPanelWrapper = styled.div`
  margin: 5.5rem 5rem 1.5rem 5rem;
  overflow: hidden;
`;

const RequestMainForm = styled.form`
  display: flex;
`;

export default RequestPanel;
