import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function Wrapper({ children }) {
  return <ComponentWrapper>{children}</ComponentWrapper>;
}

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
`;

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
