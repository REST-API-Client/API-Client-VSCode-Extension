import { IUserRequestSidebarState } from "./type";

const filterObjectKey = (
  {
    userRequestHistory,
  }: { userRequestHistory: IUserRequestSidebarState[] | undefined },
  id: string,
  filterableKey: string[],
) => {
  if (!userRequestHistory) return;

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
