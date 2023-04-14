const generateMethodColor = (method: string): string => {
  switch (method) {
    case "delete":
      return "rgb(235 32 19)";
    case "post":
      return "rgb(255 180 0)";
    case "put":
      return "rgb(9 123 237)";
    case "patch":
      return "var(--default-text)";
    default:
      return "rgb(12 187 82)";
  }
};

export default generateMethodColor;
