export interface ISidebarSlice extends ISidebarSliceList {
  sidebarOption: string | null;
  handleSidebarOption: (option: string) => void;
  handleUserHistoryCollection: (
    historyData: IUserRequestSidebarState[],
  ) => void;
  handleUserFavoritesCollection: (
    favoritesData: IUserRequestSidebarState[],
  ) => void;
  handleUserFavoriteIcon: (id: string, time: number | null) => void;
  handleUserDeleteIcon: (
    targetState: keyof ISidebarSliceList,
    id: string,
  ) => void;
  addCollectionToFavorites: (collection: IUserRequestSidebarState[]) => void;
  removeFromFavoriteCollection: (id: string) => void;
  resetFavoriteIconState: () => void;
  deleteCollection: (targetState: string) => void;
}

export interface ISidebarSliceList {
  userFavorites: IUserRequestSidebarState[];
  userRequestHistory: IUserRequestSidebarState[];
}

export interface IUserRequestSidebarState {
  url: string;
  method: string;
  headers: Headers;
  responseType: string;
  requestedTime: number;
  favoritedTime: number | null;
  isUserFavorite: boolean;
  id: string;
  requestObject: RequestObject;
}

export interface Headers {
  [key: string]: string;
}

export interface RequestObject {
  requestMethod: string;
  requestUrl: string;
  authOption: string;
  authData: AuthData;
  bodyOption: string;
  bodyRawOption: string;
  bodyRawData: BodyRawData;
  keyValueTableData: KeyValueTableDaum[];
}

export interface AuthData {
  username: string;
  password: string;
  token: string;
}

export interface BodyRawData {
  text: string;
  javascript: string;
  json: string;
  html: string;
}

export interface KeyValueTableDaum {
  optionType: string;
  isChecked: boolean;
  key: string;
  value: string;
  description: string;
}

export interface IResizseBarSlice {
  requestMenuHeight: string;
  handleRequestHeightChange: (value: number) => void;
}

export interface IResponseDataSlice {
  requestInProcess: string;
  responseData: IResponseData | undefined;
  responseOption: string;
  responseBodyOption: string;
  responseBodyViewFormat: string;
  handleResponseData: (any) => void;
  handleRequestProcessStatus: (processStatus: string) => void;
  handleResponseOptionChange: (option: string) => void;
  handleResponseBodyOptionChange: (option: string) => void;
  handleResponseBodyViewFormatChange: (option: string) => void;
}

export interface IResponseData {
  type: string;
  data: string;
  headers: IResponseDataHeader[];
  headersLength: number;
  statusCode: number;
  statusText: string;
  requestTime: number;
  responseSize: number;
  type?: string;
  message?: string;
}

export interface IResponseDataHeader {
  key: string;
  value: string;
}

export interface IRequestDataSlice extends ISidebarResponse {
  codeSnippetValue: string;
  requestUrlParams: string;
  shouldShowPassword: boolean;
  shouldBeautifyEditor: boolean;
  requestOption: string;
  codeSnippetOption: {
    language: string;
    variant: string;
    editorLanguage: string;
  };
  bodyRawData: { text: string; javascript: string; json: string; html: string };
  handleRequestUrlChange: (url: string) => void;
  handleRequestMethodChange: (method: string) => void;
  handleRequestAuthType: (authOption: string) => void;
  handleRequestAuthData: (authType: string, data: string) => void;
  handleShouldShowPassword: () => void;
  handleRequestParamsChange: (params: string) => void;
  handleRequestOptionChange: (option: string) => void;
  handleRequestAuthType: (type: string) => void;
  handleRequestBodyOption: (type: string) => void;
  handleBodyRawOption: (type: string) => void;
  handleBodyRawOptionData: (rawOption: string, data: string) => void;
  handleBeautifyButton: () => void;
  handleCodeSnippetOptionChange: (
    languageOption: string,
    variantOption: string,
    editorLanguageOption: string,
  ) => void;
  handleCodeSnippetVariantChange: (variantOption: string) => void;
  setCodeSnippetValue: (value: string) => void;
  handleSidebarCollectionClick: (value: ISidebarResponse) => void;
}

export interface ISidebarResponse {
  authData: { username: string; password: string; token: string };
  authOption: string;
  requestUrl: string;
  requestMethod: string;
  bodyOption: string;
  bodyRawOption: string;
}

export interface IKeyValueTableDataSlice {
  keyValueTableData: KeyValueTableDaum[];
  addNewTableRow: (type: string) => void;
  deleteTableRow: (index: number) => void;
  removeRequestBodyHeaders: () => void;
  addRequestBodyHeaders: (value: string) => void;
  handleRequestCheckbox: (index: number) => void;
  handleRequestKey: (index: number, detail: string) => void;
  handleRequestValue: (index: number, detail: string) => void;
  handleRequestDescription: (index: number, detail: string) => void;
  handleSidebarCollectionHeaders: (headers: KeyValueTableDaum[]) => void;
  handleFileUpload: (
    data: any,
    optionsType: string,
    replaceValues: boolean,
  ) => void;
}
