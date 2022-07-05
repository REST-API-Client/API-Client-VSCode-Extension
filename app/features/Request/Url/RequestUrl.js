import React from "react";
import styled from "styled-components";

function RequestUrl() {
  return <InputContainer placeholder="Enter Request URL" />;
}

const InputContainer = styled.input`
  padding-left: 1.5rem;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestUrl;
