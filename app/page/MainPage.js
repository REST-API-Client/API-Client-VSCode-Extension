import React from "react";

import RequestPanel from "../features/Request/Panel/RequestPanel";
import ResizeBar from "../features/ResizeBar/ResizeBar";
import ResponsePanel from "../features/Response/Panel/ResponsePanel";

const MainPage = () => {
  return (
    <>
      <RequestPanel />
      <ResizeBar />
      <ResponsePanel />
    </>
  );
};

export default MainPage;
