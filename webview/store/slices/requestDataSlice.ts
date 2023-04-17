import { StateCreator } from "zustand";
import { REQUEST } from "../../constants";
import { IRequestDataSlice, ISidebarResponse } from "./type";

const requestDataSlice: StateCreator<
  IRequestDataSlice,
  [],
  [],
  IRequestDataSlice
> = (set) => ({
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

  handleRequestUrlChange: (url: string) => set(() => ({ requestUrl: url })),

  handleRequestMethodChange: (method: string) =>
    set(() => ({ requestMethod: method })),

  handleRequestParamsChange: (params: string) =>
    set(() => ({ requestUrlParams: params })),

  handleRequestOptionChange: (option: string) =>
    set(() => ({ requestOption: option })),

  handleRequestAuthType: (type: string) => set(() => ({ authOption: type })),

  handleRequestAuthData: (authType: string, data: string) =>
    set((state) => ({
      authData: {
        ...state.authData,
        [authType]: data,
      },
    })),

  handleRequestBodyOption: (type: string) => set(() => ({ bodyOption: type })),

  handleBodyRawOption: (option: string) =>
    set(() => ({ bodyRawOption: option })),

  handleBodyRawOptionData: (rawOption: string, data: string) =>
    set((state) => ({
      bodyRawData: { ...state.bodyRawData, [rawOption]: data },
    })),

  handleShouldShowPassword: () =>
    set((state) => ({ shouldShowPassword: !state.shouldShowPassword })),

  handleBeautifyButton: () =>
    set((state) => ({
      shouldBeautifyEditor: !state.shouldBeautifyEditor,
    })),

  handleCodeSnippetOptionChange: (
    languageOption: string,
    variantOption: string,
    editorLanguageOption: string,
  ) =>
    set(() => ({
      codeSnippetOption: {
        language: languageOption,
        variant: variantOption,
        editorLanguage: editorLanguageOption,
      },
    })),

  handleCodeSnippetVariantChange: (variantOption: string) =>
    set((state) => ({
      codeSnippetOption: { ...state.codeSnippetOption, variant: variantOption },
    })),

  setCodeSnippetValue: (value: string) =>
    set(() => ({ codeSnippetValue: value })),

  handleSidebarCollectionClick: (value: ISidebarResponse) =>
    set((state) => {
      return {
        ...state,
        ...value,
      };
    }),
});

export default requestDataSlice;
