const removeUrlParameter = (url: any) => {
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
    url = url?.split("").splice(0, targetIndex);
  }

  return typeof url === "string" ? url : url.join("");
};

export default removeUrlParameter;
