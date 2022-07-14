import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import MenuOption from "../../../components/MenuOption";
import SelectWrapper from "../../../components/SelectWrapper";
import { OPTION, SIDEBAR } from "../../../constants";
import useSidebarStore from "../../../store/useSidebarStore";
import SidebarMenuOption from "./SidebarMenuOption";

const SidebarMenu = () => {
  const {
    sidebarOption,
    handleSidebarOption,
    handleUserHistoryCollection,
    handleUserFavoritesCollection,
    deleteCollection,
    resetFavoriteIconState,
  } = useSidebarStore(
    (state) => ({
      sidebarOption: state.sidebarOption,
      handleSidebarOption: state.handleSidebarOption,
      handleUserHistoryCollection: state.handleUserHistoryCollection,
      handleUserFavoritesCollection: state.handleUserFavoritesCollection,
      deleteCollection: state.deleteCollection,
      resetFavoriteIconState: state.resetFavoriteIconState,
    }),
    shallow,
  );

  useLayoutEffect(() => {
    window.addEventListener("message", (message) => {
      const { messageCategory, history, favorites, target } = message.data;

      if (messageCategory === SIDEBAR.COLLECTION_DATA) {
        handleUserHistoryCollection(history?.userRequestHistory);
        handleUserFavoritesCollection(favorites?.userRequestHistory);
      } else if (messageCategory === SIDEBAR.DELETE_COMPLETE) {
        deleteCollection(target);
        resetFavoriteIconState();
      }
    });
  }, []);

  return (
    <>
      <SidebarMenuWrapper>
        <SelectWrapper secondary>
          {OPTION.SIDEBAR_MENU_OPTIONS.map((option, index) => (
            <MenuOption
              key={index}
              currentOption={sidebarOption}
              menuOption={option}
            >
              <h3
                onClick={(event) => handleSidebarOption(event.target.innerText)}
              >
                {option}
              </h3>
            </MenuOption>
          ))}
        </SelectWrapper>
      </SidebarMenuWrapper>
      <SidebarMenuOption />
    </>
  );
};

const SidebarMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  padding-bottom: 0.7rem;
  border-bottom: 0.07rem dashed #404040;

  h3 {
    font-size: 1.25rem;
    font-weight: 200;
  }
`;

export default SidebarMenu;
