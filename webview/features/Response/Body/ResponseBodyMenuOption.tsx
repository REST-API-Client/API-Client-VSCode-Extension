import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { OPTION, RESPONSE } from "../../../constants";
import useStore from "../../../store/useStore";

const ResponseBodyViewOption = () => {
  const {
    responseBodyOption,
    responseBodyViewFormat,
    handleResponseBodyViewFormatChange,
  } = useStore(
    (state) => ({
      responseBodyOption: state.responseBodyOption,
      responseBodyViewFormat: state.responseBodyViewFormat,
      handleResponseBodyViewFormatChange:
        state.handleResponseBodyViewFormatChange,
    }),
    shallow,
  );

  return (
    <>
      {responseBodyOption === "Pretty" && (
        <SelectWrapper requestMenu={false} primary={false} secondary={false}>
          <SelectOptionWrapper
            onChange={(event) =>
              handleResponseBodyViewFormatChange(event.target.value)
            }
            value={responseBodyViewFormat}
          >
            {OPTION.RESPONSE_BODY_VIEW_FORMAT_OPTIONS.map((option, index) => (
              <option key={RESPONSE.VIEW_FORMAT + index} value={option}>
                {option}
              </option>
            ))}
          </SelectOptionWrapper>
        </SelectWrapper>
      )}
    </>
  );
};

const SelectOptionWrapper = styled.select`
  width: 7rem;
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

export default ResponseBodyViewOption;
