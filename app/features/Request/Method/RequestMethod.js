import React from "react";
import styled from "styled-components";

import { REQUEST_METHOD_OPTIONS } from "../../../constants/request";
import useRequestOptionStore from "../../../store/useRequestStore";

function RequestMethod() {
  const changeRequestMethod = useRequestOptionStore(
    (state) => state.handleRequestMethodChange,
  );

  return (
    <MethodOptionWrapper
      onChange={(event) => changeRequestMethod(event.target.value)}
      name="httpRequestMethods"
    >
      {REQUEST_METHOD_OPTIONS.map((requestMethod, index) => (
        <option key={index} value={requestMethod}>
          {requestMethod}
        </option>
      ))}
    </MethodOptionWrapper>
  );
}

const MethodOptionWrapper = styled.select`
  width: 9rem;
  height: 3.15rem;
  padding-left: 1.2rem;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestMethod;
