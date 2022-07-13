function generateArrayObjectFromData(objectData) {
  const array = [];

  for (const key in objectData) {
    const temporaryObject = {};

    temporaryObject.key = key;
    temporaryObject.value = objectData[key];

    array.push(temporaryObject);
  }

  return array;
}

export default generateArrayObjectFromData;
