import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { OPTION, REQUEST, RESPONSE } from "../constants";
import ResponsePreview from "../features/Response/Preview/ResponseDataPreview";

const CodeEditor = ({
  language,
  viewOption,
  requestForm,
  previewMode,
  editorOption,
  editorHeight,
  codeEditorValue,
  handleEditorChange,
  shouldBeautifyEditor,
  handleBeautifyButton,
}) => {
  const editorRef = useRef(null);
  const handleEditorOnMount = (editor) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    if (shouldBeautifyEditor && requestForm) {
      handleBeautifyButton();

      setTimeout(async () => {
        await editorRef.current.getAction("editor.action.formatDocument").run();
      }, 200);
    }
  }, [shouldBeautifyEditor]);

  useEffect(() => {
    if (requestForm || !previewMode || viewOption === RESPONSE.PREVIEW) return;

    if (editorRef.current?.getValue() !== codeEditorValue) {
      editorRef.current?.setValue(codeEditorValue);
    }

    setTimeout(async () => {
      editorRef.current?.updateOptions(OPTION.READ_ONLY_FALSE_OPTION);

      await editorRef.current?.getAction("editor.action.formatDocument").run();

      if (viewOption === REQUEST.RAW) {
        editorRef.current?.updateOptions(OPTION.LINE_NUMBER_OPTION);
      } else {
        editorRef.current?.updateOptions(OPTION.READ_ONLY_TRUE_OPTION);
      }
    }, 300);
  }, [viewOption, language]);

  return (
    <EditorWrapper>
      {viewOption === RESPONSE.PREVIEW && previewMode ? (
        <ResponsePreview sourceCode={codeEditorValue} />
      ) : (
        <Editor
          height={editorHeight}
          language={language}
          theme={RESPONSE.THEME}
          value={codeEditorValue}
          options={editorOption}
          onChange={handleEditorChange}
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
  language: PropTypes.string,
  requestForm: PropTypes.bool,
  requestForm: PropTypes.bool,
  previewMode: PropTypes.bool,
  viewOption: PropTypes.string,
  editorHeight: PropTypes.string,
  editorOption: PropTypes.object,
  codeEditorValue: PropTypes.string,
  handleEditorChange: PropTypes.func,
  shouldBeautifyEditor: PropTypes.bool,
  handleBeautifyButton: PropTypes.func,
};

export default CodeEditor;
