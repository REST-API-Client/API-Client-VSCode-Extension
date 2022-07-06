export const GET = "Get";
export const RAW = "Raw";
export const GZIP = "gzip";
export const NONE = "None";
export const PARAMS = "Params";
export const ACCEPT = "Accept";
export const DEFLATE = "deflate";
export const NO_AUTH = "No Auth";
export const ANY_MIME_TYPE = "*/*";
export const NO_CACHE = "no-cache";
export const AUTH = "Authorization";
export const FORM_DATA = "Form Data";
export const BASIC_AUTH = "Basic Auth";
export const CONNECTION = "Connection";
export const KEEP_ALIVE = "keep-alive";
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
export const REQUEST_BODY_OPTIONS = [
  "None",
  "Form Data",
  "x-www-form-urlencoded",
  "Raw",
];
