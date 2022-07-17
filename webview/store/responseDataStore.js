import create from "zustand";

const initialState = {
  requestInProcess: "",
  responseData: undefined,
};

const useResponseDataStore = create((set) => ({
  responseData: initialState.responseData,
  requestInProcess: initialState.requestInProcess,

  handleResponseData: (data) => set(() => ({ responseData: data })),

  handleRequestProcessStatus: (processStatus) =>
    set(() => ({ requestInProcess: processStatus })),
}));

export default useResponseDataStore;
