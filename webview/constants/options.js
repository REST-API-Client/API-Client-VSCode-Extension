const OPTION = {
  AUTHORIZATION_OPTIONS: ["No Auth", "Basic Auth", "Bearer Token"],
  REQUEST_METHOD_OPTIONS: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  REQUEST_MENU_OPTIONS: ["Params", "Authorization", "Headers", "Body"],
  REQUEST_BODY_RAW_OPTIONS: [
    { option: "Text", headerField: "text/plain" },
    { option: "JavaScript", headerField: "application/javascript" },
    {
      option: "JSON",
      headerField: "application/json",
    },
    { option: "HTML", headerField: "text/html" },
  ],
  REQUEST_BODY_OPTIONS: [
    { option: "None", headerField: "" },
    { option: "Form Data", headerField: "multipart/form-data" },
    {
      option: "x-www-form-urlencoded",
      headerField: "application/x-www-form-urlencoded",
    },
    { option: "Raw", headerField: "text/plain" },
  ],
  RESPONSE_MENU_OPTIONS: ["Body", "Headers"],
  RESPONSE_BODY_OPTIONS: ["Pretty", "Raw", "Preview"],
  RESPONSE_RESULT_INFORMATION: ["Status", "Time", "Size"],
  RESPONSE_BODY_VIEW_FORMAT_OPTIONS: ["JSON", "HTML", "Text"],
  LOADER_CSS_OPTIONS: { opacity: "0.85" },
  EDITOR_OPTIONS: {
    tabSize: 2,
    smoothScrolling: true,
    renderWhitespace: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
  },
  REQUEST_RAW_BODY_EDITOR_OPTIONS: {
    tabSize: 2,
    readOnly: false,
    smoothScrolling: true,
    renderWhitespace: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
  },
  READ_ONLY_TRUE_OPTION: { readOnly: true, lineNumbers: "on" },
  READ_ONLY_FALSE_OPTION: { readOnly: false, lineNumbers: "on" },
  LINE_NUMBER_OPTION: { readOnly: true, lineNumbers: "off" },
  SIDEBAR_MENU_OPTIONS: ["History", "Favorites"],
};

export default OPTION;
