import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { OPTION, REQUEST } from "../../../constants";
import useKeyValueTableStore from "../../../store/keyValueTableStore";
import useRequestStore from "../../../store/requestStore";

const RequestBodyRawOptions = () => {
  const { bodyRawOption, handleBodyRawOption } = useRequestStore(
    (state) => ({
      bodyRawOption: state.bodyRawOption,
      bodyRawData: state.bodyRawData,
      handleBodyRawOption: state.handleBodyRawOption,
    }),
    shallow,
  );
  const { addRequestBodyHeaders, removeRequestBodyHeaders } =
    useKeyValueTableStore(
      (state) => ({
        addRequestBodyHeaders: state.addRequestBodyHeaders,
        removeRequestBodyHeaders: state.removeRequestBodyHeaders,
      }),
      shallow,
    );

  const handleBodyRawSelectOption = (event) => {
    const selectedOptionIndex = event.target.selectedIndex;
    const selectedOptionElement = event.target.childNodes[selectedOptionIndex];

    handleBodyRawOption(event.target.value);

    if (event.target.value === REQUEST.NONE) {
      removeRequestBodyHeaders();
    } else {
      removeRequestBodyHeaders();
      addRequestBodyHeaders(selectedOptionElement.getAttribute("header-type"));
    }
  };

  return (
    <SelectWrapper primary>
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
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestBodyRawOptions;
