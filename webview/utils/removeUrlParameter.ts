const removeUrlParameter = (url: string): string | undefined => {
  if (url[0] === "?") return;

  let targetIndex = 0;

  for (let i = 0; i < url.length; i++) {
    if (url[i] === "?") {
      targetIndex = i;

      break;
    }
  }

  if (targetIndex !== 0) {
    const reformedUrl = url?.split("").splice(0, targetIndex);

    return reformedUrl.join("");
  }

  return url;
};

export default removeUrlParameter;
