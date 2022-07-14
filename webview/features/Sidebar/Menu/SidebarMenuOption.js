import React from "react";
import shallow from "zustand/shallow";

import {
  ADD_TO_FAVORITES,
  DELETE_ALL_COLLECTION,
  FAVORITES,
  REMOVE_FROM_FAVORITES,
  USER_FAVORITES_COLLECTION,
  USER_REQUEST_HISTORY_COLLECTION,
} from "../../../constants/sidebar";
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
    if (command === ADD_TO_FAVORITES) {
      vscode.postMessage({ command, id });

      const selectedCollection = userRequestHistory.filter(
        (collection) => collection.id === id,
      );

      handleUserFavoriteIcon(id);
      addCollectionToFavorites(selectedCollection);
    } else if (command === REMOVE_FROM_FAVORITES) {
      vscode.postMessage({ command, id });

      handleUserFavoriteIcon(id);
      removeFromFavoriteCollection(id);
    } else {
      vscode.postMessage({ command, id, target });

      if (target === USER_FAVORITES_COLLECTION) {
        handleUserFavoriteIcon(id);
      }

      handleUserDeleteIcon(target, id);
    }
  };

  const handleDeleteAllButton = () => {
    switch (sidebarOption) {
      case FAVORITES:
        return vscode.postMessage({
          command: DELETE_ALL_COLLECTION,
          target: USER_FAVORITES_COLLECTION,
        });
      default:
        return vscode.postMessage({
          command: DELETE_ALL_COLLECTION,
          target: USER_REQUEST_HISTORY_COLLECTION,
        });
    }
  };

  switch (sidebarOption) {
    case FAVORITES:
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
