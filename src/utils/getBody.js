import FormData from "form-data";

import { FORM_DATA, FORM_URLENCODED, RAW } from "../constants/bodyTypes";

function getBody(keyValueData, bodyOption, bodyRawOption, bodyRawData) {
  if (bodyOption === "None") return;
  if (bodyOption === RAW)
    return JSON.stringify(bodyRawData[bodyRawOption.toLowerCase()]);

  if (bodyOption === FORM_DATA) {
    const formData = new FormData();

    const formDataArray = keyValueData.filter(
      (data) => data.optionType === FORM_DATA && data.isChecked,
    );

    for (const { key, value } of formDataArray) {
      formData.append(key, value);
    }

    return formData;
  } else if (bodyOption === FORM_URLENCODED) {
    const urlEncodedFormData = new URLSearchParams();

    const formDataArray = keyValueData.filter(
      (data) => data.optionType === FORM_URLENCODED && data.isChecked,
    );

    for (const { key, value } of formDataArray) {
      urlEncodedFormData.append(key, value);
    }

    return urlEncodedFormData;
  }
}

export default getBody;
