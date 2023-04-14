import { StateCreator } from "zustand";
import { COMMON, RESPONSE } from "../../constants";

import { IResponseDataSlice } from "./type";

const initialState = {
  requestInProcess: "",
  responseData: undefined,
  responseOption: COMMON.BODY,
  responseBodyOption: RESPONSE.PRETTY,
  responseBodyViewFormat: COMMON.JSON,
};

const responseDataSlice: StateCreator<
  IResponseDataSlice,
  [],
  [],
  IResponseDataSlice
> = (set) => ({
  responseData: initialState.responseData,
  responseOption: initialState.responseOption,
  requestInProcess: initialState.requestInProcess,
  responseBodyOption: initialState.responseBodyOption,
  responseBodyViewFormat: initialState.responseBodyViewFormat,

  handleResponseData: (data: any) => set(() => ({ responseData: data })),

  handleRequestProcessStatus: (processStatus: string) =>
    set(() => ({ requestInProcess: processStatus })),

  handleResponseOptionChange: (option: string) =>
    set(() => ({ responseOption: option })),

  handleResponseBodyOptionChange: (option: string) =>
    set(() => ({ responseBodyOption: option })),

  handleResponseBodyViewFormatChange: (option: string) =>
    set(() => ({ responseBodyViewFormat: option })),
});

export default responseDataSlice;
