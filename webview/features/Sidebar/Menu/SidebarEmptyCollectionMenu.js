import PropTypes from "prop-types";
import React from "react";

import Message from "../../../components/Message";
import { SIDEBAR } from "../../../constants";
import EmptyFavoritesCollectionMessage from "../Message/EmptyFavoritesCollectionMessage";
import EmptyHistoryCollectionMessage from "../Message/EmptyHistoryCollectionMessage";

const SibebarEmptyCollectionMenu = ({ currentSidebarOption }) => {
  return (
    <Message>
      {currentSidebarOption === SIDEBAR.HISTORY ? (
        <EmptyHistoryCollectionMessage />
      ) : (
        <EmptyFavoritesCollectionMessage />
      )}
    </Message>
  );
};

SibebarEmptyCollectionMenu.propTypes = {
  currentSidebarOption: PropTypes.string,
};

export default SibebarEmptyCollectionMenu;
