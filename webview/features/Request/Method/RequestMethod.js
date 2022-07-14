import React from "react";
import styled from "styled-components";

import { OPTION, REQUEST } from "../../../constants";
import useRequestStore from "../../../store/useRequestStore";

const RequestMethod = () => {
  const handleRequestMethodChange = useRequestStore(
    (state) => state.handleRequestMethodChange,
  );

  return (
    <MethodOptionWrapper
      onChange={(event) => handleRequestMethodChange(event.target.value)}
      name="httpRequestMethods"
    >
      {OPTION.REQUEST_METHOD_OPTIONS.map((requestMethod, index) => (
        <option key={REQUEST.METHOD + index} value={requestMethod}>
          {requestMethod}
        </option>
      ))}
    </MethodOptionWrapper>
  );
};

const MethodOptionWrapper = styled.select`
  width: 9rem;
  height: 3.15rem;
  padding-left: 1.2rem;
  font-size: 1.15rem;
  color: var(--default-text);
  font-weight: 500;
`;

export default RequestMethod;
