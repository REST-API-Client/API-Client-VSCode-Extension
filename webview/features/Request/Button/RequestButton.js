import React from "react";

import Button from "../../../components/Button";
import useStore from "../../../store/useStore";

const RequestButton = () => {
  const requestInProcess = useStore((state) => state.requestInProcess);

  return (
    <Button primary buttonType="submit" buttonStatus={requestInProcess}>
      Send
    </Button>
  );
};

export default RequestButton;
