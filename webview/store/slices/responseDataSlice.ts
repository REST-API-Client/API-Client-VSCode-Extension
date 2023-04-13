import { COMMON, RESPONSE } from "../../constants";

const initialState = {
  requestInProcess: "",
  responseData: undefined,
  responseOption: COMMON.BODY,
  responseBodyOption: RESPONSE.PRETTY,
  responseBodyViewFormat: COMMON.JSON,
};

const responseDataSlice = (set: any) => ({
  responseData: initialState.responseData,
  responseOption: initialState.responseOption,
  requestInProcess: initialState.requestInProcess,
  responseBodyOption: initialState.responseBodyOption,
  responseBodyViewFormat: initialState.responseBodyViewFormat,

  handleResponseData: (data: any) => set(() => ({ responseData: data })),

  handleRequestProcessStatus: (processStatus: any) =>
    set(() => ({ requestInProcess: processStatus })),

  handleResponseOptionChange: (option: any) =>
    set(() => ({ responseOption: option })),

  handleResponseBodyOptionChange: (option: any) =>
    set(() => ({ responseBodyOption: option })),

  handleResponseBodyViewFormatChange: (option: any) =>
    set(() => ({ responseBodyViewFormat: option })),
});

export default responseDataSlice;
