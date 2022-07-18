import React from "react";

import Button from "../../../components/Button";
import useStore from "../../../store/useStore";

const RequestBodyFormatButton = () => {
  const handleBeautifyButton = useStore((state) => state.handleBeautifyButton);

  return (
    <Button buttonPurpose="format" handleButtonClick={handleBeautifyButton}>
      Beautify Editor
    </Button>
  );
};

export default RequestBodyFormatButton;
