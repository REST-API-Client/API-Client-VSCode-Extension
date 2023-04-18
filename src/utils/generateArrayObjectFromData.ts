import { IRequestHeaderInformation } from "./type";

function generateArrayObjectFromData(objectData: IRequestHeaderInformation) {
  const array = [];

  for (const key in objectData) {
    const temporaryObject = { key: "", value: "" };

    temporaryObject.key = key;
    temporaryObject.value = objectData[key];

    array.push(temporaryObject);
  }

  return array;
}

export default generateArrayObjectFromData;
