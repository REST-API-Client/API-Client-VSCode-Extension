import { TYPE } from "../constants";

function getHeaders(keyValueData, authOption, { username, password, token }) {
  const headersObject = {};

  const headersData = keyValueData.filter(
    (data) => data.optionType === TYPE.HEADERS && data.isChecked,
  );

  if (!headersData.length) return;

  for (const { key, value } of headersData) {
    headersObject[key] = value;
  }

  if (authOption === TYPE.BASIC_AUTH) {
    headersObject[TYPE.AUTHORIZATION] = `Basic ${new Buffer.from(
      username + ":" + password,
    ).toString("base64")}`;
  }

  if (authOption === TYPE.BEARER_TOKEN) {
    headersObject[TYPE.AUTHORIZATION] = `Bearer ${token}`;
  }

  return headersObject;
}

export default getHeaders;
