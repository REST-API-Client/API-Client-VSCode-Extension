import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { EDITOR_HEIGHT, FORM_HEIGHT } from "../constants/height";
import {
  EDITOR_OPTIONS,
  LINE_NUMBER_OPTION,
  READ_ONLY_FALSE_OPTION,
  READ_ONLY_TRUE_OPTION,
} from "../constants/options";
import { RAW } from "../constants/request";
import { PREVIEW, TEXT, THEME } from "../constants/response";
import { JSON } from "../constants/shared";
import ResponsePreview from "../features/Response/Preview/ResponseDataPreview";
import useRequestStore from "../store/useRequestStore";
import useResponseOptionStore from "../store/useResponseOptionStore";

const CodeEditor = ({ requestFormValue, responseValue, requestForm }) => {
  const editorRef = useRef(null);
  const { responseOption, responseBodyOption, responseBodyViewFormat } =
    useResponseOptionStore((state) => state);
  const [editorLanguage, setEditorLanguage] = useState(
    responseBodyViewFormat.toLowerCase(),
  );
  const {
    bodyOption,
    handleBodyRawData,
    shouldBeautifyEditor,
    handleBeautifyButton,
  } = useRequestStore((state) => state);

  const handleEditorOnMount = (editor) => {
    editorRef.current = editor;
  };

  function handleRequestBodyEditorChange(bodyValue) {
    handleBodyRawData(bodyValue);
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
  }, [bodyOption, shouldBeautifyEditor]);

  useEffect(() => {
    if (requestForm) return;
    if (responseBodyOption === "Preview") return;

    if (editorRef.current?.getValue() !== responseValue) {
      editorRef.current?.setValue(responseValue);
    }

    if (responseBodyOption !== RAW) {
      setTimeout(async () => {
        editorRef.current.updateOptions(READ_ONLY_FALSE_OPTION);

        await editorRef.current.getAction("editor.action.formatDocument").run();

        editorRef.current.updateOptions(READ_ONLY_TRUE_OPTION);
      }, 300);

      setEditorLanguage(responseBodyViewFormat.toLowerCase());
    } else {
      setTimeout(() => {
        editorRef.current.updateOptions(LINE_NUMBER_OPTION);
      }, 300);

      setEditorLanguage(TEXT);
    }
  }, [responseOption, responseBodyOption, responseBodyViewFormat]);

  return (
    <EditorWrapper>
      {responseBodyOption === PREVIEW && !requestForm ? (
        <ResponsePreview sourceCode={responseValue} />
      ) : (
        <Editor
          height={requestForm ? FORM_HEIGHT : EDITOR_HEIGHT}
          language={requestForm ? JSON : editorLanguage}
          theme={THEME}
          value={requestForm ? requestFormValue : responseValue}
          options={EDITOR_OPTIONS}
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
  requestFormValue: PropTypes.string,
  requestForm: PropTypes.bool,
};

export default CodeEditor;
