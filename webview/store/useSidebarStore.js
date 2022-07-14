import create from "zustand";

const initialState = {
  sidebarOption: "History",
  userRequestHistory: [],
  userFavorites: [],
};

const useSidebarStore = create((set) => ({
  sidebarOption: initialState.sidebarOption,
  userRequestHistory: initialState.userRequestHistory,
  userFavorites: initialState.userFavorites,

  handleSidebarOption: (option) => set(() => ({ sidebarOption: option })),

  handleUserHistory: (historyData) =>
    set(() => ({ userRequestHistory: historyData })),

  handleUserFavorites: (favoritesData) =>
    set(() => ({ userFavorites: favoritesData })),

  handleUserFavoriteIcon: (id) =>
    set((state) => ({
      userRequestHistory: state.userRequestHistory.map((historyData) =>
        historyData.id === id
          ? { ...historyData, isUserFavorite: !historyData.isUserFavorite }
          : historyData,
      ),
    })),

  addHistoryToFavorite: (collection) =>
    set((state) => ({
      userFavorites: [...state.userFavorites, ...collection],
    })),

  removeFromFavoriteCollection: (id) => {
    set((state) => ({
      userFavorites: state.userFavorites.filter(
        (historyData) => historyData.id !== id,
      ),
    }));
  },

  handleUserDeleteIcon: (targetState, id) => {
    set((state) => ({
      [targetState]: state[targetState].filter(
        (historyData) => historyData.id !== id,
      ),
    }));
  },
}));

export default useSidebarStore;
