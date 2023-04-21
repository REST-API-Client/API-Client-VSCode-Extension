import React from "react";
import styled from "styled-components";

import LoadJSONFileButton from "../features/Request/Button/LoadJSONFileButton";
import { ILoadButtonsBlockProps } from "./type";

const LoadButtonsBlock = ({ optionsType }: ILoadButtonsBlockProps) => (
  <ButtonsWrapper>
    <LoadJSONFileButton optionsType={optionsType} replaceValues={false} />
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
