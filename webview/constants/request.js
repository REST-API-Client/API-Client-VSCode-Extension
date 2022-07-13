export const GET = "GET";
export const RAW = "Raw";
export const GZIP = "gzip";
export const NONE = "None";
export const TOKEN = "token";
export const PARAMS = "Params";
export const ACCEPT = "Accept";
export const METHOD = "Method";
export const REQUEST = "Request";
export const DEFLATE = "deflate";
export const NO_AUTH = "No Auth";
export const ANY_MIME_TYPE = "*/*";
export const PASSWORD = "password";
export const USERNAME = "username";
export const NO_CACHE = "no-cache";
export const AUTH = "Authorization";
export const FORM_DATA = "Form Data";
export const BASIC_AUTH = "Basic Auth";
export const CONNECTION = "Connection";
export const KEEP_ALIVE = "keep-alive";
export const CONTENT_TYPE = "Content-Type";
export const BEARER_TOKEN = "Bearer Token";
export const CACHE_CONTROL = "Cache-Control";
export const ACCEPT_ENCODING = "Accept-Encoding";
export const FORM_URLENCODED = "x-www-form-urlencoded";
export const AUTHORIZATION_OPTIONS = ["No Auth", "Basic Auth", "Bearer Token"];
export const REQUEST_METHOD_OPTIONS = ["GET", "POST", "PUT", "PATCH", "DELETE"];
export const REQUEST_MENU_OPTIONS = [
  "Params",
  "Authorization",
  "Headers",
  "Body",
  "Options",
];
export const REQUEST_BODY_RAW_OPTIONS = [
  { option: "Text", headerField: "text/plain" },
  { option: "JavaScript", headerField: "application/javascript" },
  {
    option: "JSON",
    headerField: "application/json",
  },
  { option: "HTML", headerField: "text/html" },
];
export const REQUEST_BODY_OPTIONS = [
  { option: "None", headerField: "" },
  { option: "Form Data", headerField: "multipart/form-data" },
  {
    option: "x-www-form-urlencoded",
    headerField: "application/x-www-form-urlencoded",
  },
  { option: "Raw", headerField: "text/plain" },
];
