import React from "react";
import shallow from "zustand/shallow";

import { HEADERS } from "../../../constants/shared";
import CodeEditor from "../../../shared/CodeEditor";
import KeyValueTable from "../../../shared/KeyValueTable";
import useResponseDataStore from "../../../store/useResponseDataStore";
import useResponseOptionStore from "../../../store/useResponseOptionStore";
import RequestBodyMenu from "../Body/ResponseBodyMenu";

const ResponseMenuOption = () => {
  const currentOption = useResponseOptionStore((state) => state.responseOption);
  const { responseData, responseHeaders } = useResponseDataStore(
    (state) => ({
      responseData: state.responseData.data,
      responseHeaders: state.responseData.headers,
    }),
    shallow,
  );

  switch (currentOption) {
    case HEADERS:
      return <KeyValueTable keyValueTableData={responseHeaders} readOnly />;
    default:
      return (
        <>
          <RequestBodyMenu />
          <CodeEditor responseValue={responseData} />
        </>
      );
  }
};

export default ResponseMenuOption;
