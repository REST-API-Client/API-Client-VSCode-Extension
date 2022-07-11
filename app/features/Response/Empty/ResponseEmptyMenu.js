import React from "react";

import connectionIcon from "../../../assets/svg/connection.svg";
import Message from "../../../components/Message";

const ResponseEmptyMenu = () => {
  return (
    <Message primary>
      <img src={connectionIcon} alt="Connection SVG" />
      <h3 className="introMessage">
        Enter request URL and click send to get a response
      </h3>
    </Message>
  );
};

export default ResponseEmptyMenu;
