const filterDuplicatesFromObject = (
  currentCollection,
  previousCollection,
  id,
) => {
  const arr = [];
  const filteredCurrentCollection = currentCollection.filter(
    (history) => history.isUserFavorite,
  );

  previousCollection?.map((history) => (history.favoritedTime = null)) || [];

  const filteredPreviousCollection =
    previousCollection?.filter((history) => history.id !== id) || [];

  const combinedCollection = [
    ...filteredCurrentCollection,
    ...filteredPreviousCollection,
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
