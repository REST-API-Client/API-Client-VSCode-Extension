import { REQUEST } from "../../constants";

const initialState = {
  requestUrl: "",
  codeSnippetValue: "",
  requestUrlParams: "",
  bodyRawOption: "Text",
  bodyOption: REQUEST.NONE,
  shouldShowPassword: false,
  requestMethod: REQUEST.GET,
  shouldBeautifyEditor: false,
  authOption: REQUEST.NO_AUTH,
  requestOption: REQUEST.PARAMS,
  codeSnippetOption: {
    language: "C",
    variant: "libcurl",
    editorLanguage: "c",
  },
  authData: { username: "", password: "", token: "" },
  bodyRawData: { text: "", javascript: "", json: "", html: "" },
};

const requestDataSlice = (set) => ({
  authData: initialState.authData,
  authOption: initialState.authOption,
  requestUrl: initialState.requestUrl,
  bodyOption: initialState.bodyOption,
  bodyRawData: initialState.bodyRawData,
  requestMethod: initialState.requestMethod,
  requestOption: initialState.requestOption,
  bodyRawOption: initialState.bodyRawOption,
  codeSnippetValue: initialState.codeSnippetValue,
  requestUrlParams: initialState.requestUrlParams,
  codeSnippetOption: initialState.codeSnippetOption,
  shouldShowPassword: initialState.shouldShowPassword,
  shouldBeautifyEditor: initialState.shouldBeautifyEditor,

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
});

export default requestDataSlice;
