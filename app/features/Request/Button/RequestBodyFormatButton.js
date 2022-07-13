import React from "react";

import Button from "../../../components/Button";
import useRequestStore from "../../../store/useRequestStore";

const RequestBodyFormatButton = () => {
  const handleBeautifyButton = useRequestStore(
    (state) => state.handleBeautifyButton,
  );

  return (
    <Button buttonPurpose="format" handleButtonClick={handleBeautifyButton}>
      Beautify Editor
    </Button>
  );
};

export default RequestBodyFormatButton;
