import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { HEIGHT, OPTION, REQUEST, RESPONSE } from "../constants";
import ResponsePreview from "../features/Response/Preview/ResponseDataPreview";
import useResponseOptionStore from "../store/useResponseOptionStore";

const CodeEditor = ({
  bodyRawOption,
  bodyRawData,
  handleBodyRawOptionData,
  shouldBeautifyEditor,
  handleBeautifyButton,
  responseValue,
  requestForm,
}) => {
  const editorRef = useRef(null);
  const { responseOption, responseBodyOption, responseBodyViewFormat } =
    useResponseOptionStore(
      (state) => ({
        responseOption: state.responseOption,
        responseBodyOption: state.responseBodyOption,
        responseBodyViewFormat: state.responseBodyViewFormat,
      }),
      shallow,
    );
  const [editorLanguage, setEditorLanguage] = useState(
    responseBodyViewFormat.toLowerCase(),
  );

  const handleEditorOnMount = (editor) => {
    editorRef.current = editor;
  };

  function handleRequestBodyEditorChange(bodyValue) {
    handleBodyRawOptionData(bodyRawOption, bodyValue);
  }

  useEffect(() => {
    if (requestForm) {
      if (shouldBeautifyEditor) {
        handleBeautifyButton();

        setTimeout(async () => {
          await editorRef.current
            .getAction("editor.action.formatDocument")
            .run();
        }, 300);
      }
    }
  }, [shouldBeautifyEditor]);

  useEffect(() => {
    if (requestForm) return;
    if (responseBodyOption === "Preview") return;

    if (editorRef.current?.getValue() !== responseValue) {
      editorRef.current?.setValue(responseValue);
    }

    if (responseBodyOption !== REQUEST.RAW) {
      setTimeout(async () => {
        editorRef.current?.updateOptions(OPTION.READ_ONLY_FALSE_OPTION);

        await editorRef.current
          ?.getAction("editor.action.formatDocument")
          .run();

        editorRef.current?.updateOptions(OPTION.READ_ONLY_TRUE_OPTION);
      }, 300);

      setEditorLanguage(responseBodyViewFormat.toLowerCase());
    } else {
      setTimeout(() => {
        editorRef.current?.updateOptions(OPTION.LINE_NUMBER_OPTION);
      }, 300);

      setEditorLanguage(RESPONSE.TEXT);
    }
  }, [responseOption, responseBodyOption, responseBodyViewFormat]);

  return (
    <EditorWrapper>
      {responseBodyOption === RESPONSE.PREVIEW && !requestForm ? (
        <ResponsePreview sourceCode={responseValue} />
      ) : (
        <Editor
          height={requestForm ? HEIGHT.FORM_HEIGHT : HEIGHT.EDITOR_HEIGHT}
          language={requestForm ? bodyRawOption : editorLanguage}
          theme={RESPONSE.THEME}
          value={requestForm ? bodyRawData[bodyRawOption] : responseValue}
          options={OPTION.EDITOR_OPTIONS}
          onChange={requestForm && handleRequestBodyEditorChange}
          onMount={handleEditorOnMount}
        />
      )}
    </EditorWrapper>
  );
};

const EditorWrapper = styled.div`
  margin-top: 2rem;
`;

CodeEditor.propTypes = {
  responseValue: PropTypes.string,
  bodyRawOption: PropTypes.string,
  bodyRawData: PropTypes.object,
  handleBodyRawOptionData: PropTypes.func,
  shouldBeautifyEditor: PropTypes.bool,
  handleBeautifyButton: PropTypes.func,
  requestForm: PropTypes.bool,
};

export default CodeEditor;
