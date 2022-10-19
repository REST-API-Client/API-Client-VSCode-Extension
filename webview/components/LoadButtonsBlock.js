import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import LoadJSONFileButton from "../../webview/features/Request/Button/LoadJSONFileButton";
import { COMMON, REQUEST } from "../constants";

const LoadButtonsBlock = ({
  optionsType,
}) => (
    <ButtonsWrapper>
      <LoadJSONFileButton optionsType={optionsType} />
      <LoadJSONFileButton optionsType={optionsType} replaceValues={true} />
    </ButtonsWrapper>
  )
;

LoadButtonsBlock.propTypes = {
  optionsType: PropTypes.oneOf([COMMON.HEADERS, REQUEST.PARAMS, REQUEST.FORM_DATA, REQUEST.FORM_URLENCODED]),
  replaceValues: PropTypes.bool,
};

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 25px;
`;

export default LoadButtonsBlock;
