function generateArrayObjectFromData(objectData: any) {
  const array: any = [];

  for (const key in objectData) {
    const temporaryObject: any = {};

    temporaryObject.key = key;
    temporaryObject.value = objectData[key];

    array.push(temporaryObject);
  }

  return array;
}

export default generateArrayObjectFromData;
