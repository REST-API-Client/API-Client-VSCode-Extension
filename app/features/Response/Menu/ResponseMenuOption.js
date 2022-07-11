import React from "react";

import { HEADERS } from "../../../constants/shared";
import KeyValueTable from "../../../shared/KeyValueTable";
import useResponseDataStore from "../../../store/useResponseDataStore";
import useResponseOptionStore from "../../../store/useResponseOptionStore";

const ResponseMenuOption = () => {
  const currentOption = useResponseOptionStore((state) => state.responseOption);
  const responseHeaders = useResponseDataStore(
    (state) => state.responseData.headers,
  );

  switch (currentOption) {
    case HEADERS:
      return <KeyValueTable keyValueTableData={responseHeaders} readOnly />;
    default:
      return (
        <>
          <h1>Code Editor</h1>
        </>
      );
  }
};

export default ResponseMenuOption;
