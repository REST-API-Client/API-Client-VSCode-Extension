import create from "zustand";

import { COMMON, RESPONSE } from "../constants";

const initialState = {
  responseOption: COMMON.BODY,
  responseBodyOption: RESPONSE.PRETTY,
  responseBodyViewFormat: COMMON.JSON,
};

const useResponseOptionStore = create((set) => ({
  responseOption: initialState.responseOption,
  responseBodyOption: initialState.responseBodyOption,
  responseBodyViewFormat: initialState.responseBodyViewFormat,

  handleResponseOptionChange: (option) =>
    set(() => ({ responseOption: option })),

  handleResponseBodyOptionChange: (option) =>
    set(() => ({ responseBodyOption: option })),

  handleResponseBodyViewFormatChange: (option) =>
    set(() => ({ responseBodyViewFormat: option })),
}));

export default useResponseOptionStore;
