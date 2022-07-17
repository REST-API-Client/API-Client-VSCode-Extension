import React from "react";
import shallow from "zustand/shallow";

import { COMMON, HEIGHT, OPTION, REQUEST } from "../../../constants";
import CodeEditor from "../../../shared/CodeEditor";
import KeyValueTable from "../../../shared/KeyValueTable";
import useResponseDataStore from "../../../store/responseDataStore";
import useResponseOptionStore from "../../../store/responseOptionStore";
import RequestBodyMenu from "../Body/ResponseBodyMenu";

const ResponseMenuOption = () => {
  const { responseOption, responseBodyViewFormat, responseBodyOption } =
    useResponseOptionStore(
      (state) => ({
        responseOption: state.responseOption,
        responseBodyViewFormat: state.responseBodyViewFormat,
        responseBodyOption: state.responseBodyOption,
      }),
      shallow,
    );

  const { responseData, responseHeaders } = useResponseDataStore(
    (state) => ({
      responseData: state.responseData?.data,
      responseHeaders: state.responseData?.headers,
    }),
    shallow,
  );

  switch (responseOption) {
    case COMMON.HEADERS:
      return <KeyValueTable keyValueTableData={responseHeaders} readOnly />;
    default:
      return (
        <>
          <RequestBodyMenu />
          <CodeEditor
            codeEditorValue={responseData}
            language={
              responseBodyOption === REQUEST.RAW
                ? REQUEST.RAW
                : responseBodyViewFormat.toLowerCase()
            }
            viewOption={responseBodyOption}
            editorOption={OPTION.EDITOR_OPTIONS}
            editorHeight={HEIGHT.RESPONSE_EDITOR_HEIGHT}
            previewMode
          />
        </>
      );
  }
};

export default ResponseMenuOption;
