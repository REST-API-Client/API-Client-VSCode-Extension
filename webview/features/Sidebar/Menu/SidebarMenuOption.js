import React from "react";
import shallow from "zustand/shallow";

import { SIDEBAR } from "../../../constants";
import SidebarCollection from "../../../shared/SidebarCollection";
import useSidebarStore from "../../../store/useSidebarStore";
import vscode from "../../../vscode";

const SidebarMenuOption = () => {
  const {
    sidebarOption,
    userRequestHistory,
    userFavorites,
    handleUserFavoriteIcon,
    addCollectionToFavorites,
    removeFromFavoriteCollection,
    handleUserDeleteIcon,
  } = useSidebarStore(
    (state) => ({
      sidebarOption: state.sidebarOption,
      userRequestHistory: state.userRequestHistory,
      userFavorites: state.userFavorites,
      addCollectionToFavorites: state.addCollectionToFavorites,
      removeFromFavoriteCollection: state.removeFromFavoriteCollection,
      handleUserFavoriteIcon: state.handleUserFavoriteIcon,
      handleUserDeleteIcon: state.handleUserDeleteIcon,
    }),
    shallow,
  );

  const handleSidebarIconClick = (command, id, target) => {
    const currentTime = new Date().getTime();

    if (command === SIDEBAR.ADD_TO_FAVORITES) {
      vscode.postMessage({ command, id });

      const selectedCollection = userRequestHistory.filter(
        (collection) => collection.id === id,
      );
      selectedCollection[0].favoritedTime = currentTime;

      handleUserFavoriteIcon(id, currentTime);
      addCollectionToFavorites(selectedCollection);
    } else if (command === SIDEBAR.REMOVE_FROM_FAVORITES) {
      vscode.postMessage({ command, id });

      handleUserFavoriteIcon(id, null);
      removeFromFavoriteCollection(id);
    } else {
      vscode.postMessage({ command, id, target });

      if (target === SIDEBAR.USER_FAVORITES_COLLECTION) {
        handleUserFavoriteIcon(id, null);
      }

      handleUserDeleteIcon(target, id);
    }
  };

  const handleDeleteAllButton = () => {
    switch (sidebarOption) {
      case SIDEBAR.FAVORITES:
        return vscode.postMessage({
          command: SIDEBAR.DELETE_ALL_COLLECTION,
          target: SIDEBAR.USER_FAVORITES_COLLECTION,
        });
      default:
        return vscode.postMessage({
          command: SIDEBAR.DELETE_ALL_COLLECTION,
          target: SIDEBAR.USER_REQUEST_HISTORY_COLLECTION,
        });
    }
  };

  switch (sidebarOption) {
    case SIDEBAR.FAVORITES:
      return (
        <SidebarCollection
          sidebarOption={sidebarOption}
          userCollection={userFavorites}
          handleSidebarIconClick={handleSidebarIconClick}
          handleDeleteAllButton={handleDeleteAllButton}
        />
      );
    default:
      return (
        <SidebarCollection
          sidebarOption={sidebarOption}
          userCollection={userRequestHistory}
          handleSidebarIconClick={handleSidebarIconClick}
          handleDeleteAllButton={handleDeleteAllButton}
        />
      );
  }
};

export default SidebarMenuOption;
