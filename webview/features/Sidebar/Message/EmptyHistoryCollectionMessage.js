import React from "react";
import { AiOutlineHistory } from "react-icons/ai";

import Message from "../../../components/Message";

const EmptyHistoryCollectionMessage = () => {
  return (
    <Message>
      <AiOutlineHistory className="sidebarEmptyIcon" />
      <p>Your history collection seems to be empty.</p>
      <p>Start making requests to view your history collection.</p>
    </Message>
  );
};

export default EmptyHistoryCollectionMessage;
