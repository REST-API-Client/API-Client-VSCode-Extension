export const generateMethodColor = (method) => {
  switch (method) {
    case "delete":
      return "rgb(235 32 19)";
    case "post":
      return "rgb(255 180 0)";
    case "put":
      return "rgb(9 123 237)";
    case "patch":
      return "rgb(33 33 33)";
    default:
      return "rgb(12 187 82)";
  }
};
