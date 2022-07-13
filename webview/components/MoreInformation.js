import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const MoreInformation = ({ children }) => {
  return <MoreInformationWrapper>{children}</MoreInformationWrapper>;
};

const MoreInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
  transition: opacity 0.15s ease-in-out;

  p {
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.5;
    user-select: none;
  }

  .sidebarIcon {
    margin: 0.3rem;
    font-size: 1.1rem;
    opacity: 0.8;
    cursor: pointer;

    :hover {
      opacity: 0.45;
    }
  }

  .favorite {
    fill: rgb(251 86 115);
  }
`;

MoreInformation.propTypes = {
  children: PropTypes.node,
};

export default MoreInformation;
