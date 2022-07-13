import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import {
  NONE,
  RAW,
  REQUEST_BODY_OPTIONS,
  REQUEST_BODY_RAW_OPTIONS,
} from "../../../constants/request";
import { BODY } from "../../../constants/shared";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestBodyFormatButton from "../Button/RequestBodyFormatButton";
import RequestBodyRawOptions from "./RequestBodyRawOptions";
import RequestBodyMenuOption from "./RequestBodySelectMenuOption";

const RequestBodySelectMenu = () => {
  const { bodyOption, bodyRawOption, handleRequestBodyOption } =
    useRequestStore(
      (state) => ({
        bodyOption: state.bodyOption,
        bodyRawOption: state.bodyRawOption,
        handleRequestBodyOption: state.handleRequestBodyOption,
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

  const rawOptionHeaderField = REQUEST_BODY_RAW_OPTIONS.filter(
    (rawOption) => rawOption.option === bodyRawOption,
  );

  const handleBodyOptionChoice = (event) => {
    handleRequestBodyOption(event.target.value);

    if (event.target.value === NONE) {
      removeRequestBodyHeaders();
    } else {
      removeRequestBodyHeaders();
      addRequestBodyHeaders(event.target.getAttribute("header-type"));
    }
  };

  return (
    <>
      <SelectWrapper requestMenu>
        {REQUEST_BODY_OPTIONS.map(({ option, headerField }, index) => (
          <RadioInputWrapper key={BODY + index}>
            <input
              type="radio"
              name="bodyOption"
              checked={bodyOption === option}
              value={option}
              header-type={
                option === RAW
                  ? rawOptionHeaderField[0].headerField
                  : headerField
              }
              onChange={handleBodyOptionChoice}
            />
            <label htmlFor={option}>{option}</label>
          </RadioInputWrapper>
        ))}
        {bodyOption === RAW && (
          <>
            <RequestBodyRawOptions />
            <RequestBodyFormatButton />
          </>
        )}
      </SelectWrapper>
      <RequestBodyMenuOption />
    </>
  );
};

const RadioInputWrapper = styled.div`
  display: flex;
  margin: 0.5rem 1rem;

  input {
    width: auto;
    margin-right: 0.7rem;
    cursor: pointer;
  }

  label {
    user-select: none;
  }
`;

export default RequestBodySelectMenu;
