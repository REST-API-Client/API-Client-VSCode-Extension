import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { OPTION, REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";

const RequestMethod = () => {
  const { requestMethod, handleRequestMethodChange } = useStore(
    (state) => ({
      requestMethod: state.requestMethod,
      handleRequestMethodChange: state.handleRequestMethodChange,
    }),
    shallow,
  );

  return (
    <MethodSelectOptionWrapper
      name="httpRequestMethods"
      value={requestMethod}
      onChange={(event) => handleRequestMethodChange(event.target.value)}
    >
      {OPTION.REQUEST_METHOD_OPTIONS.map((requestMethod, index) => (
        <option key={REQUEST.METHOD + index} value={requestMethod}>
          {requestMethod}
        </option>
      ))}
    </MethodSelectOptionWrapper>
  );
};

const MethodSelectOptionWrapper = styled.select`
  width: 9rem;
  height: 3.15rem;
  padding-left: 1.2rem;
  font-size: 1.15rem;
  color: var(--default-text);
  font-weight: 500;
`;

export default RequestMethod;
