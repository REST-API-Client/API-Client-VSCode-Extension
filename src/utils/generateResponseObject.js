import axios from "axios";

async function generateResponseObject(configuration) {
  try {
    const sentTime = new Date().getTime();

    const response = await axios(configuration);

    const receivedTime = new Date().getTime();
    const headersSize = Object.keys(response.headers).length;
    const headersArray = [];

    for (const key in response.headers) {
      const headerObject = {};

      headerObject.key = key;
      headerObject.value = response.headers[key];

      headersArray.push(headerObject);
    }

    if (typeof response.data === "object") {
      response.data = JSON.stringify(response.data);
    }

    const totalRequestTime = receivedTime - sentTime;
    const responseDataObject = {
      type: "Response",
      data: response.data,
      headers: headersArray,
      headersLength: headersSize,
      statusCode: response.status,
      statusText: response.statusText,
      requestTime: totalRequestTime,
    };

    const size = Buffer.from(JSON.stringify(responseDataObject)).length;

    responseDataObject.responseSize = size;

    return responseDataObject;
  } catch (error) {
    if (error.response) {
    } else if (error.request) {
    } else {
    }
  }
}

export default generateResponseObject;