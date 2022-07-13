import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import { AUTH, AUTHORIZATION_OPTIONS } from "../../../constants/request";
import useRequestStore from "../../../store/useRequestStore";
import RequestAuthMenuOption from "./RequestAuthSelectMenuOption";

const RequestAuthSelectMenu = () => {
  const { authOption, handleRequestAuthType } = useRequestStore(
    (state) => ({
      authOption: state.authOption,
      authData: state.authData,
      handleRequestAuthType: state.handleRequestAuthType,
    }),
    shallow,
  );

  return (
    <>
      <SelectWrapper requestMenu>
        <h3>Authorization Type: </h3>
        <OptionWrapper
          onChange={(event) => handleRequestAuthType(event.target.value)}
          value={authOption}
        >
          {AUTHORIZATION_OPTIONS.map((option, index) => (
            <option key={AUTH + index} value={option}>
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
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestAuthSelectMenu;
