import React, { ChangeEvent } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { COMMON, OPTION, REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";
import RequestBodyFormatButton from "../Button/RequestBodyFormatButton";
import RequestBodyRawOptions from "./RequestBodyRawOptions";
import RequestBodyMenuOption from "./RequestBodySelectMenuOption";

const RequestBodySelectMenu = () => {
  const {
    bodyOption,
    bodyRawOption,
    handleRequestBodyOption,
    addRequestBodyHeaders,
    removeRequestBodyHeaders,
  } = useStore(
    (state) => ({
      bodyOption: state.bodyOption,
      bodyRawOption: state.bodyRawOption,
      handleRequestBodyOption: state.handleRequestBodyOption,
      addRequestBodyHeaders: state.addRequestBodyHeaders,
      removeRequestBodyHeaders: state.removeRequestBodyHeaders,
    }),
    shallow,
  );

  const rawOptionHeaderField = OPTION.REQUEST_BODY_RAW_OPTIONS.filter(
    (rawOption) => rawOption.option === bodyRawOption,
  );

  const handleBodyOptionChoice = (event: ChangeEvent<HTMLInputElement>) => {
    const inputTarget = event.target;
    handleRequestBodyOption(inputTarget.value);

    if (event.target.value === REQUEST.NONE) {
      removeRequestBodyHeaders();
    } else {
      removeRequestBodyHeaders();

      addRequestBodyHeaders(inputTarget.getAttribute("header-type") || "");
    }
  };

  return (
    <>
      <SelectWrapper primary={false} secondary={false} requestMenu>
        {OPTION.REQUEST_BODY_OPTIONS.map(({ option, headerField }, index) => (
          <RadioInputWrapper key={COMMON.BODY + index}>
            <label>
              <input
                type="radio"
                name="bodyOption"
                checked={bodyOption === option}
                value={option}
                header-type={
                  option === REQUEST.RAW
                    ? rawOptionHeaderField[0].headerField
                    : headerField
                }
                onChange={handleBodyOptionChoice}
              />
              {option}
            </label>
          </RadioInputWrapper>
        ))}
        {bodyOption === REQUEST.RAW && (
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
  margin: 0.5rem 1rem;

  input {
    width: auto;
    margin-right: 0.7rem;
    cursor: pointer;
  }

  label {
    display: flex;
    user-select: none;
  }
`;

export default RequestBodySelectMenu;
