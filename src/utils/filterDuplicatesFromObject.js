const filterDuplicatesFromObject = (
  currentCollection,
  previousCollection,
  id,
) => {
  const arr = [];
  const filteredCurrentCollection = currentCollection.filter(
    (history) => history.isUserFavorite,
  );

  const filteredPreviousCollection =
    previousCollection?.filter((history) => history.id !== id) || [];

  const combinedCollection = [
    ...filteredPreviousCollection,
    ...filteredCurrentCollection,
  ];

  const duplicateFilteredCollection = combinedCollection.filter((history) => {
    if (!arr.includes(history.id)) {
      arr.push(history.id);
      return history;
    }
  });

  return duplicateFilteredCollection;
};

export default filterDuplicatesFromObject;
