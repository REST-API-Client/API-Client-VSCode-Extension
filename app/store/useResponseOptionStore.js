import create from "zustand";

import { PRETTY } from "../constants/response";
import { BODY, JSON } from "../constants/shared";

const initialState = {
  responseOption: BODY,
  responseBodyOption: PRETTY,
  responseBodyViewFormat: JSON,
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
