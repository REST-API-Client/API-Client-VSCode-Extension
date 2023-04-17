import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { OPTION, REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";
import RequestAuthMenuOption from "./RequestAuthSelectMenuOption";

const RequestAuthSelectMenu = () => {
  const { authOption, handleRequestAuthType } = useStore(
    (state) => ({
      authOption: state.authOption,
      handleRequestAuthType: state.handleRequestAuthType,
    }),
    shallow,
  );

  return (
    <>
      <SelectWrapper requestMenu primary={false} secondary={false}>
        <h3>Authorization Type: </h3>
        <OptionWrapper
          onChange={(event) => handleRequestAuthType(event.target.value)}
          value={authOption}
        >
          {OPTION.AUTHORIZATION_OPTIONS.map((option, index) => (
            <option key={REQUEST.AUTH + index} value={option}>
              {option}
            </option>
          ))}
        </OptionWrapper>
      </SelectWrapper>
      <RequestAuthMenuOption />
    </>
  );
};

const OptionWrapper = styled.select`
  width: 11rem;
  height: 2.3rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: var(--vscode-editor-background);
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestAuthSelectMenu;
