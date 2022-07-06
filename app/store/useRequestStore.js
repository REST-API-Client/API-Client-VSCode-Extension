import create from "zustand";

import { GET, PARAMS } from "../constants/request";

const initialState = {
  requestMethod: GET,
  requestUrl: "",
  requestUrlParams: "",
  requestOption: PARAMS,
};

const useRequestStore = create((set) => ({
  requestMethod: initialState.requestMethod,
  requestUrl: initialState.requestUrl,
  requestUrlParams: initialState.requestUrlParams,
  requestOption: initialState.requestOption,

  handleRequestMethodChange: (method) => set(() => ({ requestMethod: method })),

  handleRequestUrlChange: (url) => set(() => ({ requestUrl: url })),

  handleRequestParamsChange: (params) =>
    set(() => ({ requestUrlParams: params })),

  handleRequestOptionChange: (option) => set(() => ({ requestOption: option })),
}));

export default useRequestStore;
