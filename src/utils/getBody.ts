import FormData from "form-data";

import { TYPE } from "../constants";
import { IBodyRawData, IParameterKeyValueData } from "./type";

function getBody(
  keyValueData: IParameterKeyValueData[],
  bodyOption: string,
  bodyRawOption: string,
  bodyRawData: IBodyRawData,
) {
  if (bodyOption === "None") return "";

  if (bodyOption === TYPE.BODY_RAW)
    return bodyRawData[
      bodyRawOption.toLowerCase() as keyof {
        text: string;
        javascript: string;
        json: string;
        html: string;
      }
    ];

  if (bodyOption === TYPE.BODY_FORM_DATA) {
    const formData = new FormData();

    const formDataArray = keyValueData.filter(
      (data) => data.optionType === TYPE.BODY_FORM_DATA && data.isChecked,
    );

    for (const { key, value } of formDataArray) {
      formData.append(key, value);
    }

    return formData;
  } else if (bodyOption === TYPE.BODY_FORM_URLENCODED) {
    const urlEncodedFormData = new URLSearchParams();

    const formDataArray = keyValueData.filter(
      (data) => data.optionType === TYPE.BODY_FORM_URLENCODED && data.isChecked,
    );

    for (const { key, value } of formDataArray) {
      urlEncodedFormData.append(key, value);
    }

    return urlEncodedFormData;
  }

  return "";
}

export default getBody;
