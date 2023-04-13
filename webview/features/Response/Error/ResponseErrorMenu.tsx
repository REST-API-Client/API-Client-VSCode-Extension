import React from "react";

import errorImage from "../../../assets/image/error.png";
import Message from "../../../components/Message";

interface TResponseErrorMenu {
  type: string;
  message: string;
}

const ResponseErrorMenu = ({ type, message }: TResponseErrorMenu) => {
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

export default ResponseErrorMenu;
