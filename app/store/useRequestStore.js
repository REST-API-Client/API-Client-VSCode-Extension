import create from "zustand";

import { GET, NO_AUTH, NONE, PARAMS } from "../constants/request";

const initialState = {
  requestMethod: GET,
  requestUrl: "",
  requestUrlParams: "",
  requestOption: PARAMS,
  authOption: NO_AUTH,
  authData: { username: "", password: "", token: "" },
  bodyOption: NONE,
};

const useRequestStore = create((set) => ({
  requestUrl: initialState.requestUrl,
  requestMethod: initialState.requestMethod,
  requestUrlParams: initialState.requestUrlParams,
  requestOption: initialState.requestOption,
  authOption: initialState.authOption,
  authData: initialState.authData,
  bodyOption: initialState.bodyOption,

  handleRequestUrlChange: (url) => set(() => ({ requestUrl: url })),

  handleRequestMethodChange: (method) => set(() => ({ requestMethod: method })),

  handleRequestParamsChange: (params) =>
    set(() => ({ requestUrlParams: params })),

  handleRequestOptionChange: (option) => set(() => ({ requestOption: option })),

  handleRequestAuthType: (type) => set(() => ({ authOption: type })),

  handleRequestUsernameData: (data) =>
    set((state) => ({
      authData: {
        ...state.authData,
        username: data,
      },
    })),

  handleRequestPasswordData: (data) =>
    set((state) => ({
      authData: {
        ...state.authData,
        password: data,
      },
    })),

  handleRequestTokenData: (data) =>
    set((state) => ({
      authData: {
        ...state.authData,
        token: data,
      },
    })),

  handleRequestBodyOption: (type) => set(() => ({ bodyOption: type })),
}));

export default useRequestStore;
