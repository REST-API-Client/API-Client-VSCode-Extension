import React, { useLayoutEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

import EmptyFavoritesMessage from "../Empty/EmptyFavoritesMessage";

const SidebarFavorites = () => {
  return <EmptyFavoritesMessage />;
};

export default SidebarFavorites;
