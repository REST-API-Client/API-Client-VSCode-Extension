import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

import Message from "../../../components/Message";

const EmptyFavoritesCollectionMessage = () => {
  return (
    <Message>
      <AiOutlineHeart className="sidebarEmptyIcon" />
      <p>Your favorites collection seems to be empty.</p>
      <p>
        Press the heart icon from your history collection to add it to your
        favorites collection.
      </p>
    </Message>
  );
};

export default EmptyFavoritesCollectionMessage;
