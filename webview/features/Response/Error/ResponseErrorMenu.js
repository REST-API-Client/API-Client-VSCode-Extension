import PropTypes from "prop-types";
import React from "react";

import errorImage from "../../../assets/image/error.png";
import Message from "../../../components/Message";

const ResponseErrorMenu = ({ type, message }) => {
  return (
    <Message primary>
      <img src={errorImage} alt="error" />
      <h2>Could not send request 😔</h2>
      <h3>
        {type}: {message}
      </h3>
    </Message>
  );
};

ResponseErrorMenu.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default ResponseErrorMenu;
