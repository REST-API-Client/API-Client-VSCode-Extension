import axios from "axios";

import { generateArrayObjectFromData } from "./index";

async function generateResponseObject(configuration) {
  const sentTime = new Date().getTime();

  try {
    const response = await axios(configuration);

    const receivedTime = new Date().getTime();
    const totalRequestTime = receivedTime - sentTime;
    const headersSize = Object.keys(response.headers).length;
    const headersArray = generateArrayObjectFromData(response.headers);

    if (typeof response.data === "object") {
      response.data = JSON.stringify(response.data);
    }

    const responseDataObject = {
      type: "Response",
      data: response.data,
      headers: headersArray,
      headersLength: headersSize,
      statusCode: response.status,
      statusText: response.statusText,
      requestTime: totalRequestTime,
    };

    responseDataObject.responseSize = Buffer.from(
      JSON.stringify(responseDataObject),
    ).length;

    return responseDataObject;
  } catch (error) {
    if (error.response) {
      const receivedTime = new Date().getTime();
      const totalRequestTime = receivedTime - sentTime;

      const headersSize = Object.keys(error.response.headers).length;
      const headersArray = generateArrayObjectFromData(error.response.headers);

      const errorObject = {
        type: "Response",
        data: error.response.data,
        headers: headersArray,
        headersLength: headersSize,
        statusCode: error.response.status,
        statusText: "Not Found",
        requestTime: totalRequestTime,
      };

      errorObject.responseSize = Buffer.from(
        JSON.stringify(errorObject),
      ).length;

      return errorObject;
    } else if (error.request) {
      const errorObject = {
        type: "Error",
        message: error.message,
      };

      return errorObject;
    } else {
      const errorObject = {
        type: "Error",
        message: error.message,
      };

      return errorObject;
    }
  }
}

export default generateResponseObject;
