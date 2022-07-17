import React from "react";

import Button from "../../../components/Button";
import useResponseDataStore from "../../../store/responseDataStore";

const RequestButton = () => {
  const requestInProcess = useResponseDataStore(
    (state) => state.requestInProcess,
  );

  return (
    <Button primary buttonType="submit" buttonStatus={requestInProcess}>
      Send
    </Button>
  );
};

export default RequestButton;
