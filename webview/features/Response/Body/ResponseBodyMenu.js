import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { OPTION, RESPONSE } from "../../../constants";
import useResponseOptionStore from "../../../store/useResponseOptionStore";
import ResponseCopyIcon from "../Copy/ResponseCopyIcon";
import ResponseBodyViewOption from "./ResponseBodyMenuOption";

const RequestBodyMenu = () => {
  const { responseBodyOption, handleResponseBodyOptionChange } =
    useResponseOptionStore(
      (state) => ({
        responseBodyOption: state.responseBodyOption,
        handleResponseBodyOptionChange: state.handleResponseBodyOptionChange,
      }),
      shallow,
    );

  const handleOptionChange = (event) => {
    handleResponseBodyOptionChange(event.target.innerText);
  };

  return (
    <SelectWrapper>
      {OPTION.RESPONSE_BODY_OPTIONS.map((option, index) => (
        <OptionContainer
          key={RESPONSE.RESPONSE_BODY + index}
          primary={responseBodyOption === option}
          radius={index}
          onClick={handleOptionChange}
        >
          {option}
        </OptionContainer>
      ))}
      <ResponseBodyViewOption />
      {responseBodyOption !== "Preview" && <ResponseCopyIcon />}
    </SelectWrapper>
  );
};

const OptionContainer = styled.div`
  padding: 0.6rem 0.9rem;
  background: ${(props) =>
    props.primary
      ? "var(--vscode-button-hoverBackground)"
      : "rgba(97, 97, 97, 0.15)"};
  border-radius: ${(props) =>
    props.radius === 0
      ? "0.5rem 0 0 0.5rem"
      : props.radius === 2
      ? "0 0.5rem 0.5rem 0"
      : "0"};
  font-weight: ${(props) => (props.primary ? "400" : "300")};
  color: var(--default-text);
  cursor: pointer;
`;

export default RequestBodyMenu;
