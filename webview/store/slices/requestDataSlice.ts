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

const requestDataSlice = (set: any) => ({
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

  handleRequestUrlChange: (url: string) => set(() => ({ requestUrl: url })),

  handleRequestMethodChange: (method: any) =>
    set(() => ({ requestMethod: method })),

  handleRequestParamsChange: (params: any) =>
    set(() => ({ requestUrlParams: params })),

  handleRequestOptionChange: (option: any) =>
    set(() => ({ requestOption: option })),

  handleRequestAuthType: (type: any) => set(() => ({ authOption: type })),

  handleRequestAuthData: (authType: any, data: any) =>
    set((state: any) => ({
      authData: {
        ...state.authData,
        [authType]: data,
      },
    })),

  handleRequestBodyOption: (type: any) => set(() => ({ bodyOption: type })),

  handleBodyRawOption: (option: any) => set(() => ({ bodyRawOption: option })),

  handleBodyRawOptionData: (rawOption: string, data: any) =>
    set((state: any) => ({
      bodyRawData: { ...state.bodyRawData, [rawOption]: data },
    })),

  handleShouldShowPassword: () =>
    set((state: any) => ({ shouldShowPassword: !state.shouldShowPassword })),

  handleBeautifyButton: () =>
    set((state: any) => ({
      shouldBeautifyEditor: !state.shouldBeautifyEditor,
    })),

  handleCodeSnippetOptionChange: (
    languageOption: any,
    variantOption: any,
    editorLanguageOption: any,
  ) =>
    set(() => ({
      codeSnippetOption: {
        language: languageOption,
        variant: variantOption,
        editorLanguage: editorLanguageOption,
      },
    })),

  handleCodeSnippetVariantChange: (variantOption: any) =>
    set((state: any) => ({
      codeSnippetOption: { ...state.codeSnippetOption, variant: variantOption },
    })),

  setCodeSnippetValue: (value: any) => set(() => ({ codeSnippetValue: value })),

  handleSidebarCollectionClick: (value: any) =>
    set((state: any) => {
      return {
        ...state,
        ...value,
      };
    }),
});

export default requestDataSlice;
