import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function DetailOption({ children, requestMenu }) {
  return (
    <DetailOptionWrapper purpose={requestMenu}>{children}</DetailOptionWrapper>
  );
}

const DetailOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) =>
    props.purpose ? " 1.7rem 4.7rem 2.3rem 0" : "0 0 1.7rem 0"};

  p {
    padding-bottom: 0.35rem;
    color: rgb(66 245 66);
    transform: translateX(-0.7rem);
    user-select: none;
  }
`;

DetailOption.propTypes = {
  children: PropTypes.node,
  requestMenu: PropTypes.bool,
};

export default DetailOption;
