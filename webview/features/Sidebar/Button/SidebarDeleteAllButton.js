import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const SidebarDeleteAllButton = ({ clickHandler }) => {
  return (
    <DeleteAllButtonWrapper
      className="deleteAllButtonContainer"
      onClick={clickHandler}
    >
      <h5>Delete all</h5>
    </DeleteAllButtonWrapper>
  );
};

const DeleteAllButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;

  h5 {
    text-align: end;
    padding: 0.25rem 0.4rem;
    color: #cbcbcb;
    border-radius: 10px;
    background: #853333;
    transition: opacity 0.15s ease-in-out;
    cursor: pointer;

    :hover {
      opacity: 0.45;
    }
  }
`;

SidebarDeleteAllButton.propTypes = {
  clickHandler: PropTypes.func,
};

export default SidebarDeleteAllButton;
