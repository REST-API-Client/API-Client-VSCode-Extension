import create from "zustand";

import { REQUEST } from "../constants";

const initialState = {
  requestMethod: REQUEST.GET,
  requestUrl: "",
  requestUrlParams: "",
  requestOption: REQUEST.PARAMS,
  authOption: REQUEST.NO_AUTH,
  authData: { username: "", password: "", token: "" },
  bodyOption: REQUEST.NONE,
  bodyRawOption: "Text",
  bodyRawData: { text: "", javascript: "", json: "", html: "" },
  shouldBeautifyEditor: false,
  shouldShowPassword: false,
  codeSnippetOption: {
    language: "C",
    variant: "libcurl",
    editorLanguage: "c",
  },
  codeSnippetValue: "",
};

const useRequestStore = create((set) => ({
  requestUrl: initialState.requestUrl,
  requestMethod: initialState.requestMethod,
  requestUrlParams: initialState.requestUrlParams,
  requestOption: initialState.requestOption,
  authOption: initialState.authOption,
  authData: initialState.authData,
  bodyOption: initialState.bodyOption,
  bodyRawOption: initialState.bodyRawOption,
  bodyRawData: initialState.bodyRawData,
  shouldShowPassword: initialState.shouldShowPassword,
  shouldBeautifyEditor: initialState.shouldBeautifyEditor,
  codeSnippetOption: initialState.codeSnippetOption,
  codeSnippetValue: initialState.codeSnippetValue,

  handleRequestUrlChange: (url) => set(() => ({ requestUrl: url })),

  handleRequestMethodChange: (method) => set(() => ({ requestMethod: method })),

  handleRequestParamsChange: (params) =>
    set(() => ({ requestUrlParams: params })),

  handleRequestOptionChange: (option) => set(() => ({ requestOption: option })),

  handleRequestAuthType: (type) => set(() => ({ authOption: type })),

  handleRequestAuthData: (authType, data) =>
    set((state) => ({
      authData: {
        ...state.authData,
        [authType]: data,
      },
    })),

  handleRequestBodyOption: (type) => set(() => ({ bodyOption: type })),

  handleBodyRawOption: (option) => set(() => ({ bodyRawOption: option })),

  handleBodyRawOptionData: (rawOption, data) =>
    set((state) => ({
      bodyRawData: { ...state.bodyRawData, [rawOption]: data },
    })),

  handleShouldShowPassword: () =>
    set((state) => ({ shouldShowPassword: !state.shouldShowPassword })),

  handleBeautifyButton: () =>
    set((state) => ({ shouldBeautifyEditor: !state.shouldBeautifyEditor })),

  handleCodeSnippetOptionChange: (
    languageOption,
    variantOption,
    editorLanguageOption,
  ) =>
    set(() => ({
      codeSnippetOption: {
        language: languageOption,
        variant: variantOption,
        editorLanguage: editorLanguageOption,
      },
    })),

  handleCodeSnippetVariantChange: (variantOption) =>
    set((state) => ({
      codeSnippetOption: { ...state.codeSnippetOption, variant: variantOption },
    })),

  setCodeSnippetValue: (value) => set(() => ({ codeSnippetValue: value })),
}));

export default useRequestStore;