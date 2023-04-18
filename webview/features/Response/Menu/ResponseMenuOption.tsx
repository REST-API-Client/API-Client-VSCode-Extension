import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { COMMON, HEIGHT, OPTION, REQUEST } from "../../../constants";
import CodeEditor from "../../../shared/CodeEditor";
import KeyValueTable from "../../../shared/KeyValueTable";
import useStore from "../../../store/useStore";
import RequestBodyMenu from "../Body/ResponseBodyMenu";

const ResponseMenuOption = () => {
  const {
    responseData,
    responseOption,
    responseHeaders,
    responseBodyOption,
    responseBodyViewFormat,
  } = useStore(
    (state) => ({
      responseData: state.responseData?.data,
      responseOption: state.responseOption,
      responseHeaders: state.responseData?.headers,
      responseBodyOption: state.responseBodyOption,
      responseBodyViewFormat: state.responseBodyViewFormat,
    }),
    shallow,
  );

  switch (responseOption) {
    case COMMON.HEADERS:
      return (
        <ResponseHeaderWrapper>
          {responseHeaders && (
            <KeyValueTable keyValueTableData={responseHeaders} readOnly />
          )}
        </ResponseHeaderWrapper>
      );
    default:
      return (
        <>
          <RequestBodyMenu />
          <CodeEditor
            codeEditorValue={responseData ? responseData : ""}
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

const ResponseHeaderWrapper = styled.div`
  height: 60vh;
  overflow-y: scroll;
`;

export default ResponseMenuOption;
