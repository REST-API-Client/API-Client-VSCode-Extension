import PropTypes from "prop-types";
import React from "react";
import { AiOutlineHeart, AiOutlineHistory } from "react-icons/ai";

import Message from "../../../components/Message";
import { SIDEBAR } from "../../../constants";

const EmptyCollectionMessage = ({ currentSidebarOption }) => {
  return (
    <Message>
      {currentSidebarOption === SIDEBAR.HISTORY ? (
        <>
          <AiOutlineHistory className="sidebarEmptyIcon" />
          <p>Your history collection seems to be empty.</p>
          <p>Start making requests to view your history collection.</p>
        </>
      ) : (
        <>
          <AiOutlineHeart className="sidebarEmptyIcon" />
          <p>Your favorites collection seems to be empty.</p>
          <p>
            Press the heart icon from your history collection to add it to your
            favorites collection
          </p>
        </>
      )}
    </Message>
  );
};

EmptyCollectionMessage.propTypes = {
  currentSidebarOption: PropTypes.string,
};

export default EmptyCollectionMessage;
