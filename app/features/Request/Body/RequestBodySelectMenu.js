import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { NONE, REQUEST_BODY_OPTIONS } from "../../../constants/request";
import { BODY } from "../../../constants/shared";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestBodySelectMenuOption from "./RequestBodySelectMenuOption";

const RequestBodySelectMenu = () => {
  const { bodyOption, handleRequestBodyOption } = useRequestStore(
    (state) => ({
      bodyOption: state.bodyOption,
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
              header-type={headerField}
              onChange={handleBodyOptionChoice}
            />
            <label htmlFor={option}>{option}</label>
          </RadioInputWrapper>
        ))}
      </SelectWrapper>
      <RequestBodySelectMenuOption />
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
