import React from "react";

import Message from "../../../components/Message";

const RequestNoBody = () => {
  return (
    <Message primary={false}>
      <p>This request does not have a body.</p>
      <p>
        If you want body in your request, select your body option from above.
      </p>
    </Message>
  );
};

export default RequestNoBody;
