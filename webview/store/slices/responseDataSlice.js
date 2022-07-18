import { COMMON, RESPONSE } from "../../constants";

const initialState = {
  requestInProcess: "",
  responseData: undefined,
  responseOption: COMMON.BODY,
  responseBodyOption: RESPONSE.PRETTY,
  responseBodyViewFormat: COMMON.JSON,
};

const responseDataSlice = (set) => ({
  responseData: initialState.responseData,
  responseOption: initialState.responseOption,
  requestInProcess: initialState.requestInProcess,
  responseBodyOption: initialState.responseBodyOption,
  responseBodyViewFormat: initialState.responseBodyViewFormat,

  handleResponseData: (data) => set(() => ({ responseData: data })),

  handleRequestProcessStatus: (processStatus) =>
    set(() => ({ requestInProcess: processStatus })),

  handleResponseOptionChange: (option) =>
    set(() => ({ responseOption: option })),

  handleResponseBodyOptionChange: (option) =>
    set(() => ({ responseBodyOption: option })),

  handleResponseBodyViewFormatChange: (option) =>
    set(() => ({ responseBodyViewFormat: option })),
});

export default responseDataSlice;
