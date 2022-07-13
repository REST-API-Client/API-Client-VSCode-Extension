import React from "react";
import { AiOutlineHistory } from "react-icons/ai";

import Message from "../../../components/Message";

const EmptyHistoryMessage = () => {
  return (
    <Message>
      <AiOutlineHistory className="sidebarEmptyIcon" />
      <p>Your history collection seems to be empty.</p>
      <p>Start making requests to view your history collection.</p>
    </Message>
  );
};

export default EmptyHistoryMessage;
