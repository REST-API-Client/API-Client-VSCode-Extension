import { SIDEBAR } from "../../constants";

const initialState = {
  userFavorites: [],
  userRequestHistory: [],
  sidebarOption: SIDEBAR.HISTORY,
};

const sidebarSlice = (set: any) => ({
  userFavorites: initialState.userFavorites,
  sidebarOption: initialState.sidebarOption,
  userRequestHistory: initialState.userRequestHistory,

  handleSidebarOption: (option: any) => set(() => ({ sidebarOption: option })),

  handleUserHistoryCollection: (historyData: any) =>
    set(() => ({ userRequestHistory: historyData })),

  handleUserFavoritesCollection: (favoritesData: any) =>
    set(() => ({ userFavorites: favoritesData })),

  handleUserFavoriteIcon: (id: any, time: any) =>
    set((state: any) => ({
      userRequestHistory: state.userRequestHistory.map((historyData: any) =>
        historyData.id === id
          ? {
              ...historyData,
              isUserFavorite: !historyData.isUserFavorite,
              favoritedTime: time,
            }
          : historyData,
      ),
    })),

  handleUserDeleteIcon: (targetState: any, id: any) => {
    set((state: any) => ({
      [targetState]: state[targetState].filter(
        (historyData: any) => historyData.id !== id,
      ),
    }));
  },

  addCollectionToFavorites: (collection: any) =>
    set((state: any) => ({
      userFavorites: [...collection, ...state.userFavorites],
    })),

  removeFromFavoriteCollection: (id: any) => {
    set((state: any) => ({
      userFavorites: state.userFavorites.filter(
        (historyData: any) => historyData.id !== id,
      ),
    }));
  },

  resetFavoriteIconState: () =>
    set((state: any) => ({
      userRequestHistory: state.userRequestHistory.map((historyData: any) =>
        historyData.isUserFavorite === true
          ? { ...historyData, isUserFavorite: false }
          : historyData,
      ),
    })),

  deleteCollection: (targetState: any) => {
    set(() => ({ [targetState]: [] }));
  },
});

export default sidebarSlice;
