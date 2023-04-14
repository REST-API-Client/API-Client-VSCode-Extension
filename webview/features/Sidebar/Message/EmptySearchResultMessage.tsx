import React from "react";
import { MdSearchOff } from "react-icons/md";

import Message from "../../../components/Message";

interface IEmptySearchResultMessageProps {
  value: string;
}

const EmptySearchResultMessage = ({
  value,
}: IEmptySearchResultMessageProps) => {
  return (
    <Message>
      <MdSearchOff className="sidebarEmptyIcon" />
      <p>
        Could not find <span>{value}</span> from your current collection!
      </p>
      <p>Make a new request to add it to your collection.</p>
    </Message>
  );
};

export default EmptySearchResultMessage;
