import PropTypes from "prop-types";
import React from "react";

import Message from "../../../components/Message";
import { SIDEBAR } from "../../../constants";
import EmptyFavoritesCollectionMessage from "../Message/EmptyFavoritesCollectionMessage";
import EmptyHistoryCollectionMessage from "../Message/EmptyHistoryCollectionMessage";

const EmptyCollectionMenu = ({ currentSidebarOption }) => {
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

EmptyCollectionMenu.propTypes = {
  currentSidebarOption: PropTypes.string,
};

export default EmptyCollectionMenu;
