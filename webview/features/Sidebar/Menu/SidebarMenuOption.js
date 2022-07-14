import React from "react";
import shallow from "zustand/shallow";

import { FAVORITES } from "../../../constants/sidebar";
import SidebarCollection from "../../../shared/SidebarCollection";
import useSidebarStore from "../../../store/useSidebarStore";
import vscode from "../../../vscode";

const SidebarMenuOption = () => {
  const {
    sidebarOption,
    userRequestHistory,
    userFavorites,
    handleUserFavoriteIcon,
    addHistoryToFavorite,
    removeFromFavoriteCollection,
    handleUserDeleteIcon,
  } = useSidebarStore(
    (state) => ({
      sidebarOption: state.sidebarOption,
      userRequestHistory: state.userRequestHistory,
      userFavorites: state.userFavorites,
      addHistoryToFavorite: state.addHistoryToFavorite,
      removeFromFavoriteCollection: state.removeFromFavoriteCollection,
      handleUserFavoriteIcon: state.handleUserFavoriteIcon,
      handleUserDeleteIcon: state.handleUserDeleteIcon,
    }),
    shallow,
  );

  const handleSidebarIconClick = (purpose, id, target) => {
    if (purpose === "Favorite") {
      vscode.postMessage({ purpose, id });

      const selectedHistoryCollection = userRequestHistory.filter(
        (collection) => collection.id === id,
      );

      handleUserFavoriteIcon(id);
      addHistoryToFavorite(selectedHistoryCollection);
    } else if (purpose === "Remove Favorite") {
      vscode.postMessage({ purpose, id });

      handleUserFavoriteIcon(id);
      removeFromFavoriteCollection(id);
    } else {
      vscode.postMessage({ purpose, id, target });

      if (target === "userFavorites") {
        handleUserFavoriteIcon(id);
      }

      handleUserDeleteIcon(target, id);
    }
  };

  switch (sidebarOption) {
    case FAVORITES:
      return (
        <SidebarCollection
          sidebarOption={sidebarOption}
          userCollection={userFavorites}
          handleSidebarIconClick={handleSidebarIconClick}
        />
      );
    default:
      return (
        <SidebarCollection
          sidebarOption={sidebarOption}
          userCollection={userRequestHistory}
          handleSidebarIconClick={handleSidebarIconClick}
        />
      );
  }
};

export default SidebarMenuOption;
