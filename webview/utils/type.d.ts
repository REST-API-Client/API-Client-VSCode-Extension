export interface IParameterString {
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

export interface IAuthData {
  username: string;
  password: string;
  token: string;
}
