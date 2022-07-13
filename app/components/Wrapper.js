import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <ComponentWrapper>{children}</ComponentWrapper>;
};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  height: 35vh;
`;

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
