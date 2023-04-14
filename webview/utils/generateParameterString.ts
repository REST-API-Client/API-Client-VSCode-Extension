import { IParameterString } from "./type";

const generateParameterString = (dataArray: IParameterString[]) => {
  let parameterString = "?";

  if (dataArray.length === 1) {
    const parameter = `${dataArray[0].key}=${dataArray[0].value}`;

    parameterString += parameter;

    return parameterString;
  }

  for (let i = 0; i < dataArray.length; i++) {
    let parameter = "";

    if (i === 0) {
      parameter = `${dataArray[i].key}=${dataArray[i].value}`;
    } else {
      parameter = `&${dataArray[i].key}=${dataArray[i].value}`;
    }

    parameterString += parameter;
  }

  return parameterString;
};

export default generateParameterString;
