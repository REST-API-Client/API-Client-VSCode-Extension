import { IUserRequestSidebarState } from "./type";

const filterObjectKey = (
  { userRequestHistory }: { userRequestHistory: IUserRequestSidebarState[] },
  id: string,
  filterableKey: string[],
) => {
  const [{ ...selectedCollection }] = userRequestHistory.filter(
    (history) => history.id === id,
  );

  filterableKey.forEach(
    (key, index) =>
      delete selectedCollection[key[index] as keyof IUserRequestSidebarState],
  );

  return selectedCollection;
};

export default filterObjectKey;
