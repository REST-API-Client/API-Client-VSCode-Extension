import React from "react";
import shallow from "zustand/shallow";

import { HEIGHT, OPTION, REQUEST } from "../../../constants";
import CodeEditor from "../../../shared/CodeEditor";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/keyValueTableStore";
import useRequestStore from "../../../store/requestStore";
import RequestNoBody from "./RequestNoBody";

const RequestBodySelectMenuOption = () => {
  const keyValueProps = useKeyValueTableStore();
  const {
    bodyOption,
    bodyRawOption,
    codeEditorProps,
    bodyRawData,
    handleBodyRawOptionData,
  } = useRequestStore(
    (state) => ({
      bodyOption: state.bodyOption,
      bodyRawData: state.bodyRawData,
      bodyRawOption: state.bodyRawOption.toLowerCase(),
      handleBodyRawOptionData: state.handleBodyRawOptionData,
      codeEditorProps: {
        shouldBeautifyEditor: state.shouldBeautifyEditor,
        handleBeautifyButton: state.handleBeautifyButton,
      },
    }),
    shallow,
  );

  function handleRequestBodyEditorChange(bodyValue) {
    handleBodyRawOptionData(bodyRawOption, bodyValue);
  }

  switch (bodyOption) {
    case REQUEST.FORM_DATA:
    case REQUEST.FORM_URLENCODED:
      return (
        <KeyValueTable
          type={bodyOption}
          title={bodyOption}
          {...keyValueProps}
        />
      );
    case REQUEST.RAW:
      return (
        <CodeEditor
          language={bodyRawOption}
          editorOption={OPTION.EDITOR_OPTIONS}
          editorHeight={HEIGHT.REQUEST_EDITOR_HEIGHT}
          codeEditorValue={bodyRawData[bodyRawOption]}
          handleEditorChange={handleRequestBodyEditorChange}
          requestForm
          {...codeEditorProps}
        />
      );
    default:
      return <RequestNoBody />;
  }
};

export default RequestBodySelectMenuOption;
