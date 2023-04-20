import axios from "axios";

import { MESSAGE, TYPE } from "../constants";
import { generateArrayObjectFromData } from "./index";
import { IRequestData, IUserRequestSidebarState } from "./type";

async function generateResponseObject(
  configuration: IUserRequestSidebarState | IRequestData | undefined,
) {
  if (!configuration) return;

  const sentTime = new Date().getTime();

  try {
    // @ts-expect-error
    const response = await axios(configuration);

    const receivedTime = new Date().getTime();
    const totalRequestTime = receivedTime - sentTime;
    const headersSize = Object.keys(response.headers).length;
    const headersArray = generateArrayObjectFromData(response.headers);

    if (typeof response.data === "object") {
      response.data = JSON.stringify(response.data);
    }

    const responseDataObject = {
      type: TYPE.RESPONSE,
      data: response.data,
      headers: headersArray,
      headersLength: headersSize,
      statusCode: response.status,
      statusText: response.statusText,
      requestTime: totalRequestTime,
      responseSize: 0,
    };

    responseDataObject.responseSize = Buffer.from(
      JSON.stringify(responseDataObject),
    ).length;

    return responseDataObject;
  } catch (error: any) {
    if (error.response) {
      const receivedTime = new Date().getTime();
      const totalRequestTime = receivedTime - sentTime;

      const headersSize = Object.keys(error.response.headers).length;
      const headersArray = generateArrayObjectFromData(error.response.headers);

      const errorObject = {
        type: TYPE.RESPONSE,
        data: JSON.stringify(error.response.data),
        headers: headersArray,
        headersLength: headersSize,
        statusCode: error.response.status,
        statusText: MESSAGE.NOT_FOUND,
        requestTime: totalRequestTime,
        responseSize: 0,
      };

      errorObject.responseSize = Buffer.from(
        JSON.stringify(errorObject),
      ).length;

      return errorObject;
    } else if (error.request) {
      const errorObject = {
        type: MESSAGE.ERROR,
        message: error.message,
      };

      return errorObject;
    } else {
      const errorObject = {
        type: MESSAGE.ERROR,
        message: error.message,
      };

      return errorObject;
    }
  }
}

export default generateResponseObject;
