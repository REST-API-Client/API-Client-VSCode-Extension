import React, { MouseEvent } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import CopyIcon from "../../../components/CopyIcon";
import SelectWrapper from "../../../components/SelectWrapper";
import { COMMON, OPTION, RESPONSE } from "../../../constants";
import useStore from "../../../store/useStore";
import ResponseBodyViewOption from "./ResponseBodyMenuOption";

const RequestBodyMenu = () => {
  const { responseData, responseBodyOption, handleResponseBodyOptionChange } =
    useStore(
      (state) => ({
        responseData: state.responseData,
        responseBodyOption: state.responseBodyOption,
        handleResponseBodyOptionChange: state.handleResponseBodyOptionChange,
      }),
      shallow,
    );

  const handleOptionChange = (event: MouseEvent) => {
    const clickedTarget = event.target as HTMLDivElement;

    handleResponseBodyOptionChange(clickedTarget.innerText);
  };

  const handleCopyIconClick = (value: string | undefined) => {
    vscode.postMessage({ command: COMMON.ALERT_COPY });

    if (value) {
      navigator.clipboard.writeText(value);
    }
  };

  return (
    <SelectWrapper primary={false} secondary={false} requestMenu={false}>
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
      {responseBodyOption !== COMMON.PREVIEW && (
        <CopyIcon
          handleClick={handleCopyIconClick}
          value={responseData?.data}
        />
      )}
    </SelectWrapper>
  );
};

const OptionContainer = styled.div<{ primary: boolean; radius: number }>`
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
