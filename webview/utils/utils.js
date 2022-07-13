export const generateParameterString = (dataArray) => {
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

export const removeUrlParameter = (url) => {
  if (url[0] === "?") {
    return "";
  }

  let targetIndex = 0;

  for (let i = 0; i < url.length; i++) {
    if (url[i] === "?") {
      targetIndex = i;
      break;
    }
  }

  if (targetIndex !== 0) {
    url = url.split("").splice(0, targetIndex);
  }

  return typeof url === "string" ? url : url.join("");
};
