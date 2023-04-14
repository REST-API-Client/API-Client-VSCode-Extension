export interface ISidebarSlice extends ISidebarSliceList {
  sidebarOption: string;
  handleSidebarOption: (option: string) => void;
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
  favoritedTime: any;
  isUserFavorite: boolean;
  id: string;
  requestObject: RequestObject;
}

export interface Headers {
  "Cache-Control": string;
  Accept: string;
  "Accept-Encoding": string;
  Connection: string;
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
}

export interface IResponseDataSlice {
  requestInProcess: string;
  responseData: undefined;
  responseOption: string;
  responseBodyOption: string;
  responseBodyViewFormat: string;
}
