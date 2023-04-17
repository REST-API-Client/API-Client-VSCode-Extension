import { COMMON, REQUEST } from "../constants";

const generateSdkRequestObject = (
  url: string,
  method: string,
  keyValueTableData: any,
  authOption: string,
  authData: any,
  bodyOption: string,
  bodyRawOption: string,
  bodyRawData: any,
  SdkInstance: any,
) => {
  const requestHeader = keyValueTableData.filter(
    (data) => data.optionType === COMMON.HEADERS && data.key.length > 0,
  );
  const bodyData = keyValueTableData.filter(
    (data) => data.optionType === bodyOption && data.key.length > 0,
  );
  const { username, password, token } = authData;
  let authHeaderObject = null;
  let authMode = null;
  let bodyMode = null;

  switch (authOption) {
    case REQUEST.BASIC_AUTH:
      authMode = "basic";
      authHeaderObject = {
        key: REQUEST.AUTH,
        value: `Basic ${new Buffer.from(username + ":" + password).toString(
          "base64",
        )}`,
      };
      break;
    case REQUEST.BEARER_TOKEN:
      authMode = "bearer";
      authHeaderObject = {
        key: REQUEST.AUTH,
        value: `Bearer ${token}`,
      };
      break;
    default:
      break;
  }

  switch (bodyOption) {
    case REQUEST.FORM_DATA:
      bodyMode = "formdata";
      break;
    case REQUEST.FORM_URLENCODED:
      bodyMode = "urlencoded";
      break;
    case REQUEST.RAW:
      bodyMode = "raw";
      break;
    default:
      break;
  }

  const sdkObject = new SdkInstance({
    method: method,
    url: url,
    header: { ...requestHeader, authHeaderObject },
    body: {
      mode: bodyMode,
      options: {
        raw: {
          language: bodyRawOption.toLowerCase(),
        },
      },
      [bodyMode]: bodyData.length
        ? bodyData
        : bodyRawData[bodyRawOption.toLowerCase()],
    },
    auth: {
      type: authMode,
      [authMode]: authHeaderObject,
    },
  });

  return sdkObject;
};

export default generateSdkRequestObject;
