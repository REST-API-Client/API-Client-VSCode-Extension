import PropTypes from "prop-types";
import React from "react";
import { MdSearchOff } from "react-icons/md";

import Message from "../../../components/Message";

const EmptySearchResultMessage = ({ value }) => {
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

EmptySearchResultMessage.propTypes = {
  value: PropTypes.string.isRequired,
};

export default EmptySearchResultMessage;
