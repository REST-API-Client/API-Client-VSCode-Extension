import React, { ChangeEvent } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { OPTION, REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";

const RequestBodyRawOptions = () => {
  const {
    bodyRawOption,
    handleBodyRawOption,
    addRequestBodyHeaders,
    removeRequestBodyHeaders,
  } = useStore(
    (state) => ({
      bodyRawOption: state.bodyRawOption,
      handleBodyRawOption: state.handleBodyRawOption,
      addRequestBodyHeaders: state.addRequestBodyHeaders,
      removeRequestBodyHeaders: state.removeRequestBodyHeaders,
    }),
    shallow,
  );

  const handleBodyRawSelectOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionIndex = event.target.selectedIndex;
    const selectedOptionElement = event.target.childNodes[
      selectedOptionIndex
    ] as HTMLSelectElement;

    handleBodyRawOption(event.target.value);

    if (event.target.value === REQUEST.NONE) {
      removeRequestBodyHeaders();
    } else {
      removeRequestBodyHeaders();
      addRequestBodyHeaders(
        selectedOptionElement.getAttribute("header-type") || "",
      );
    }
  };

  return (
    <SelectWrapper primary secondary={false} requestMenu={false}>
      <SelectOptionWrapper
        onChange={handleBodyRawSelectOption}
        value={bodyRawOption}
      >
        {OPTION.REQUEST_BODY_RAW_OPTIONS.map(
          ({ option, headerField }, index) => (
            <option
              key={REQUEST.RAW + index}
              header-type={headerField}
              value={option}
            >
              {option}
            </option>
          ),
        )}
      </SelectOptionWrapper>
    </SelectWrapper>
  );
};

const SelectOptionWrapper = styled.select`
  width: 8.3rem;
  height: 2.3rem;
  margin-left: 1rem;
  padding-left: 0.7rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--vscode-editor-background);
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestBodyRawOptions;
