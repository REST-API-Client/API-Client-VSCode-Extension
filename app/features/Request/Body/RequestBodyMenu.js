import React from "react";
import styled from "styled-components";

import SelectWrapper from "../../../components/SelectWrapper";
import { REQUEST_BODY_OPTIONS } from "../../../constants/request";
import useRequestStore from "../../../store/useRequestStore";
import RequestBodyMenuOption from "./RequestBodyMenuOption";

function RequestBodyMenu() {
  const { bodyOption, handleRequestBodyOption } = useRequestStore(
    (state) => state,
  );

  return (
    <>
      <SelectWrapper requestMenu>
        {REQUEST_BODY_OPTIONS.map((option, index) => (
          <RadioInputWrapper key={index}>
            <input
              type="radio"
              name="bodyOption"
              checked={bodyOption === option}
              value={option}
              onChange={(event) => handleRequestBodyOption(event.target.value)}
            />
            <label htmlFor={option}>{option}</label>
          </RadioInputWrapper>
        ))}
      </SelectWrapper>
      <RequestBodyMenuOption />
    </>
  );
}

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

export default RequestBodyMenu;
