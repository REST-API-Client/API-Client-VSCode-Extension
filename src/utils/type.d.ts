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

export interface IRequestHeaderInformation {
  [key: string]: string;
}

export interface IParameterKeyValueData {
  optionType: string;
  isChecked: boolean;
  key: string;
  value: string;
  description: string;
}

export interface IBodyRawData {
  text: string;
  javascript: string;
  json: string;
  html: string;
}

export interface IHeaderAuth {
  username: string;
  password: string;
  token: string;
}

export interface IRequestObjectType {
  requestMethod: string;
  requestUrl: string;
  authOption: string;
  authData: AuthData;
  bodyOption: string;
  bodyRawOption: string;
  bodyRawData: BodyRawData;
  keyValueTableData: IKeyValueTable[];
}

export interface IAuthData {
  username: string;
  password: string;
  token: string;
}

export interface IBodyRawData {
  text: string;
  javascript: string;
  json: string;
  html: string;
}

export interface IKeyValueTable {
  optionType: string;
  isChecked: boolean;
  key: string;
  value: string;
  description: string;
}

export interface IRequestData {
  url: string;
  method: string;
  headers: IRequestHeaderInformation;
  data: string | FormData | URLSearchParams;
  responseType: string;
}
