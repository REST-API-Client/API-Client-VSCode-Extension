import React from "react";
import shallow from "zustand/shallow";

import { REQUEST } from "../../../constants";
import CodeEditor from "../../../shared/CodeEditor";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestNoBody from "./RequestNoBody";

const RequestBodySelectMenuOption = () => {
  const keyValueProps = useKeyValueTableStore();
  const { bodyOption, codeEditorProps } = useRequestStore(
    (state) => ({
      bodyOption: state.bodyOption,
      codeEditorProps: {
        bodyRawOption: state.bodyRawOption.toLowerCase(),
        bodyRawData: state.bodyRawData,
        handleBodyRawOptionData: state.handleBodyRawOptionData,
        shouldBeautifyEditor: state.shouldBeautifyEditor,
        handleBeautifyButton: state.handleBeautifyButton,
      },
    }),
    shallow,
  );

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
      return <CodeEditor {...codeEditorProps} requestForm />;

    default:
      return <RequestNoBody />;
  }
};

export default RequestBodySelectMenuOption;
