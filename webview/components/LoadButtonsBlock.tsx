import React from "react";
import styled from "styled-components";

import LoadJSONFileButton from "../features/Request/Button/LoadJSONFileButton";

interface TLoadButtonsBlockProps {
  optionsType: string;
}

const LoadButtonsBlock = ({ optionsType }: TLoadButtonsBlockProps) => (
  <ButtonsWrapper>
    <LoadJSONFileButton optionsType={optionsType} />
    <LoadJSONFileButton optionsType={optionsType} replaceValues={true} />
  </ButtonsWrapper>
);

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 25px;
`;

export default LoadButtonsBlock;
