import codegen from "postman-code-generators";
import { Request } from "postman-collection";
import React, { useEffect } from "react";
import styled from "styled-components";

import CopyIcon from "../../../components/CopyIcon";
import SelectWrapper from "../../../components/SelectWrapper";
import { COMMON, HEIGHT, OPTION } from "../../../constants";
import CodeEditor from "../../../shared/CodeEditor";
import useKeyValueTableStore from "../../../store/keyValueTableStore";
import useRequestStore from "../../../store/requestStore";
import { generateSdkRequestObject } from "../../../utils";
import vscode from "../../../vscode";

const RequestCodeSnippet = () => {
  const {
    requestUrl,
    requestMethod,
    authOption,
    authData,
    bodyOption,
    bodyRawOption,
    bodyRawData,
    codeSnippetOption,
    handleCodeSnippetOptionChange,
    handleCodeSnippetVariantChange,
    codeSnippetValue,
    setCodeSnippetValue,
  } = useRequestStore();

  const keyValueTableData = useKeyValueTableStore(
    (state) => state.keyValueTableData,
  );

  const handleCopyIconClick = (value) => {
    vscode.postMessage({ command: COMMON.ALERT_COPY });

    navigator.clipboard.writeText(value);
  };

  const sdkRequestObject = generateSdkRequestObject(
    requestUrl,
    requestMethod,
    keyValueTableData,
    authOption,
    authData,
    bodyOption,
    bodyRawOption,
    bodyRawData,
    Request,
  );

  const handleCodeSnippetOption = (event) => {
    const targetOption = OPTION.CODE_SNIPPET_OPTIONS.filter(
      (languageData) => languageData.label === event.target.value,
    );

    handleCodeSnippetOptionChange(
      event.target.value,
      targetOption[0].variants[0],
      targetOption[0].editorLanguage,
    );
  };

  useEffect(() => {
    codegen.convert(
      codeSnippetOption.language.toLowerCase(),
      codeSnippetOption.variant,
      sdkRequestObject,
      {},
      (error, snippet) => {
        if (error) {
        } else {
          setCodeSnippetValue(snippet);
        }
      },
    );
  }, [
    requestUrl,
    requestMethod,
    codeSnippetOption.language,
    codeSnippetOption.variant,
  ]);

  return (
    <>
      <SelectWrapper>
        <h3>Language: </h3>
        <SelectOptionWrapper
          onChange={handleCodeSnippetOption}
          value={codeSnippetOption.language}
        >
          {OPTION.CODE_SNIPPET_OPTIONS.map(({ label, variants }, index) => (
            <option
              key={"Code Snippet" + index}
              value={label}
              variant-type={variants[0]}
            >
              {label === "csharp" ? "C#" : label}
            </option>
          ))}
        </SelectOptionWrapper>
        <h3 className="variantsLabel">Variants: </h3>
        <SelectOptionWrapper
          onChange={(event) =>
            handleCodeSnippetVariantChange(event.target.value)
          }
          value={codeSnippetOption.variant}
        >
          {OPTION.CODE_SNIPPET_OPTIONS.map(
            ({ label, variants }, index) =>
              label === codeSnippetOption.language &&
              variants.map((variant) => (
                <option key={variant + index} value={variant}>
                  {variant}
                </option>
              )),
          )}
        </SelectOptionWrapper>
        <CopyIcon handleClick={handleCopyIconClick} value={codeSnippetValue} />
      </SelectWrapper>
      <CodeEditor
        codeEditorValue={codeSnippetValue}
        editorHeight={HEIGHT.REQUEST_EDITOR_HEIGHT}
        editorOption={OPTION.CODE_SNIPPET_EDITOR_OPTIONS}
        language={codeSnippetOption.editorLanguage.toLowerCase()}
      />
    </>
  );
};

const SelectOptionWrapper = styled.select`
  width: 9rem;
  height: 2.3rem;
  margin-left: 1rem;
  padding-left: 0.7rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestCodeSnippet;
