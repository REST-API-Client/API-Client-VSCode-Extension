import React from "react";

import { FAVORITES } from "../../../constants/sidebar";
import useSidebarStore from "../../../store/useSidebarStore";
import SidebarFavorites from "../Favorite/SidebarFavorite";
import SidebarHistory from "../History/SidebarHistory";

const SidebarMenuOption = () => {
  const sidebarOption = useSidebarStore((state) => state.sidebarOption);

  switch (sidebarOption) {
    case FAVORITES:
      return <SidebarFavorites />;
    default:
      return <SidebarHistory />;
  }
};

export default SidebarMenuOption;
