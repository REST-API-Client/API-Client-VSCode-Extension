import { StateCreator } from "zustand";
import { COMMON, RESPONSE } from "../../constants";

import { IResponseData, IResponseDataSlice } from "./type";

const responseDataSlice: StateCreator<
  IResponseDataSlice,
  [],
  [],
  IResponseDataSlice
> = (set) => ({
  requestInProcess: "",
  responseData: undefined,
  responseOption: COMMON.BODY,
  responseBodyOption: RESPONSE.PRETTY,
  responseBodyViewFormat: COMMON.JSON,

  handleResponseData: (data: IResponseData) =>
    set(() => ({ responseData: data })),

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
