import {
  AUTHORIZATION,
  BASIC_AUTH,
  BEARER_TOKEN,
} from "../constants/authTypes";

function getHeaders(keyValueData, authOption, { username, password, token }) {
  const headersObject = {};

  const headersData = keyValueData.filter(
    (data) => data.optionType === "Headers" && data.isChecked,
  );

  if (!headersData.length) return;

  for (const { key, value } of headersData) {
    headersObject[key] = value;
  }

  if (authOption === BASIC_AUTH) {
    headersObject[AUTHORIZATION] = `Basic ${new Buffer.from(
      username + ":" + password,
    ).toString("base64")}`;
  }

  if (authOption === BEARER_TOKEN) {
    headersObject[AUTHORIZATION] = `Bearer ${token}`;
  }

  return headersObject;
}

export default getHeaders;
