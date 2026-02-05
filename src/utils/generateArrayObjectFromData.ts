function generateArrayObjectFromData(objectData: Record<string, unknown>) {
  const array = [];

  for (const key in objectData) {
    const temporaryObject = { key: "", value: "" };

    temporaryObject.key = key;
    temporaryObject.value = String(objectData[key] ?? "");

    array.push(temporaryObject);
  }

  return array;
}

export default generateArrayObjectFromData;
