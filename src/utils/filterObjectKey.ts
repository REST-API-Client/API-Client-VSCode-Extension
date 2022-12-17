const filterObjectKey = ({ userRequestHistory }, id, filterableKey) => {
  const [{ ...selectedCollection }] = userRequestHistory.filter(
    (history) => history.id === id,
  );

  filterableKey.forEach((key, index) => delete selectedCollection[key[index]]);

  return selectedCollection;
};

export default filterObjectKey;
