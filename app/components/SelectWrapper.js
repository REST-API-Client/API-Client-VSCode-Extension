import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const SelectWrapper = ({ children, requestMenu, primary }) => {
  return (
    <SelectWrapperContainer primary={primary} border={requestMenu}>
      {children}
    </SelectWrapperContainer>
  );
};

const SelectWrapperContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.primary && "auto"};
  padding-bottom: ${(props) => (props.border ? "0.8rem" : "")};
  border-bottom: ${(props) =>
    props.border ? "0.08rem solid rgba(255, 255, 255, 0.3)" : ""};

  h3 {
    opacity: 0.93;
  }
`;

SelectWrapper.propTypes = {
  children: PropTypes.node,
  requestMenu: PropTypes.bool,
  primary: PropTypes.bool,
};

export default SelectWrapper;
