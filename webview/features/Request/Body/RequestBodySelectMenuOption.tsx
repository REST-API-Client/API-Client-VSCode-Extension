import React from "react";
import shallow from "zustand/shallow";

import LoadButtonsBlock from "../../../components/LoadButtonsBlock";
import { HEIGHT, OPTION, REQUEST } from "../../../constants";
import CodeEditor from "../../../shared/CodeEditor";
import KeyValueTable from "../../../shared/KeyValueTable";
import useStore from "../../../store/useStore";
import RequestNoBody from "./RequestNoBody";

const RequestBodySelectMenuOption = () => {
  const {
    bodyOption,
    bodyRawData,
    bodyRawOption,
    keyValueProps,
    codeEditorProps,
    handleBodyRawOptionData,
  } = useStore(
    (state) => ({
      bodyOption: state.bodyOption,
      bodyRawData: state.bodyRawData,
      bodyRawOption: state.bodyRawOption.toLowerCase(),
      keyValueProps: {
        addNewTableRow: state.addNewTableRow,
        deleteTableRow: state.deleteTableRow,
        handleRequestKey: state.handleRequestKey,
        keyValueTableData: state.keyValueTableData,
        handleRequestValue: state.handleRequestValue,
        addRequestBodyHeaders: state.addRequestBodyHeaders,
        handleRequestCheckbox: state.handleRequestCheckbox,
        handleRequestDescription: state.handleRequestDescription,
        removeRequestBodyHeaders: state.removeRequestBodyHeaders,
      },
      codeEditorProps: {
        shouldBeautifyEditor: state.shouldBeautifyEditor,
        handleBeautifyButton: state.handleBeautifyButton,
      },
      handleBodyRawOptionData: state.handleBodyRawOptionData,
    }),
    shallow,
  );

  function handleRequestBodyEditorChange(bodyValue: string | undefined) {
    if (bodyValue) {
      handleBodyRawOptionData(bodyRawOption, bodyValue);
    }
  }

  switch (bodyOption) {
    case REQUEST.FORM_DATA:
    case REQUEST.FORM_URLENCODED:
      return (
        <>
          <LoadButtonsBlock optionsType={bodyOption} />
          <KeyValueTable
            readOnly={false}
            type={bodyOption}
            title={bodyOption}
            {...keyValueProps}
          />
        </>
      );
    case REQUEST.RAW:
      return (
        <CodeEditor
          language={bodyRawOption}
          editorOption={OPTION.EDITOR_OPTIONS}
          editorHeight={HEIGHT.REQUEST_EDITOR_HEIGHT}
          codeEditorValue={
            bodyRawData[
              bodyRawOption as keyof {
                text: string;
                javascript: string;
                json: string;
                html: string;
              }
            ]
          }
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
