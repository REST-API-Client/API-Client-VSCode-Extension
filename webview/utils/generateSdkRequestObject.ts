import { COMMON, REQUEST } from "../constants";
import { Buffer } from "buffer";
import { IAuthData, IBodyRawData, IParameterString } from "./type";

const generateSdkRequestObject = (
  url: string,
  method: string,
  keyValueTableData: IParameterString[],
  authOption: string,
  authData: IAuthData,
  bodyOption: string,
  bodyRawOption: string,
  bodyRawData: IBodyRawData,
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
  let authMode = "";
  let bodyMode = "";

  switch (authOption) {
    case REQUEST.BASIC_AUTH:
      authMode = "basic";
      authHeaderObject = {
        key: REQUEST.AUTH,
        value: `Basic ${Buffer.from(username + ":" + password).toString(
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
        : bodyRawData[bodyRawOption.toLowerCase() as keyof IBodyRawData],
    },
    auth: {
      type: authMode,
      [authMode]: authHeaderObject,
    },
  });

  return sdkObject;
};

export default generateSdkRequestObject;
