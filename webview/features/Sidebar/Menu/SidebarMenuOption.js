import React from "react";
import shallow from "zustand/shallow";

import { REQUEST, SIDEBAR } from "../../../constants";
import useStore from "../../../store/useStore";
import SidebarCollection from "../Collection/SidebarCollection";

const SidebarMenuOption = () => {
  const {
    userFavorites,
    sidebarOption,
    userRequestHistory,
    handleUserDeleteIcon,
    handleUserFavoriteIcon,
    addCollectionToFavorites,
    removeFromFavoriteCollection,
  } = useStore(
    (state) => ({
      sidebarOption: state.sidebarOption,
      userFavorites: state.userFavorites,
      userRequestHistory: state.userRequestHistory,
      handleUserDeleteIcon: state.handleUserDeleteIcon,
      handleUserFavoriteIcon: state.handleUserFavoriteIcon,
      addCollectionToFavorites: state.addCollectionToFavorites,
      removeFromFavoriteCollection: state.removeFromFavoriteCollection,
    }),
    shallow,
  );

  const sidebarCollectionProps = {
    sidebarOption,
    handleSidebarFavoriteIcon(command, id) {
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
      }
    },
    handleDeleteButton(id) {
      switch (sidebarOption) {
        case SIDEBAR.FAVORITES:
          handleUserDeleteIcon(SIDEBAR.USER_FAVORITES_COLLECTION, id);
          handleUserFavoriteIcon(id, null);

          return vscode.postMessage({
            command: SIDEBAR.DELETE,
            id,
            target: SIDEBAR.USER_FAVORITES_COLLECTION,
          });
        default:
          handleUserDeleteIcon(SIDEBAR.USER_REQUEST_HISTORY_COLLECTION, id);

          return vscode.postMessage({
            command: SIDEBAR.DELETE,
            id,
            target: SIDEBAR.USER_REQUEST_HISTORY_COLLECTION,
          });
      }
    },
    handleDeleteAllButton() {
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
    },
    handleUrlClick(id) {
      switch (sidebarOption) {
        case SIDEBAR.FAVORITES:
          return vscode.postMessage({
            command: REQUEST.URL_REQUEST,
            id,
            target: SIDEBAR.USER_FAVORITES_COLLECTION,
          });
        default:
          return vscode.postMessage({
            command: REQUEST.URL_REQUEST,
            id,
            target: SIDEBAR.USER_REQUEST_HISTORY_COLLECTION,
          });
      }
    },
  };

  switch (sidebarOption) {
    case SIDEBAR.FAVORITES:
      return (
        <SidebarCollection
          userCollection={userFavorites}
          {...sidebarCollectionProps}
        />
      );
    default:
      return (
        <SidebarCollection
          userCollection={userRequestHistory}
          {...sidebarCollectionProps}
        />
      );
  }
};

export default SidebarMenuOption;
