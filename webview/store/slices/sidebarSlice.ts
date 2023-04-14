import { StateCreator } from "zustand";
import { SIDEBAR } from "../../constants";
import {
  ISidebarSlice,
  IUserRequestSidebarState,
  ISidebarSliceList,
} from "./type";

const initialState: ISidebarSlice = {
  userFavorites: [],
  userRequestHistory: [],
  sidebarOption: SIDEBAR.HISTORY,
};

const sidebarSlice: StateCreator<ISidebarSlice, [], [], ISidebarSlice> = (
  set,
) => ({
  userFavorites: initialState.userFavorites,
  userRequestHistory: initialState.userRequestHistory,
  sidebarOption: initialState.sidebarOption,

  handleSidebarOption: (option: string) =>
    set(() => ({ sidebarOption: option })),

  handleUserHistoryCollection: (historyData: IUserRequestSidebarState[]) =>
    set(() => ({ userRequestHistory: historyData })),

  handleUserFavoritesCollection: (favoritesData: IUserRequestSidebarState[]) =>
    set(() => ({ userFavorites: favoritesData })),

  handleUserFavoriteIcon: (id: string, time: number) =>
    set((state) => ({
      userRequestHistory: state.userRequestHistory.map((historyData) =>
        historyData.id === id
          ? {
              ...historyData,
              isUserFavorite: !historyData.isUserFavorite,
              favoritedTime: time,
            }
          : historyData,
      ),
    })),

  handleUserDeleteIcon: (targetState: keyof ISidebarSliceList, id: string) => {
    set((state) => ({
      [targetState]: state[targetState].filter(
        (historyData) => historyData.id !== id,
      ),
    }));
  },

  addCollectionToFavorites: (collection: IUserRequestSidebarState[]) =>
    set((state) => ({
      userFavorites: [...collection, ...state.userFavorites],
    })),

  removeFromFavoriteCollection: (id: string) => {
    set((state) => ({
      userFavorites: state.userFavorites.filter(
        (historyData) => historyData.id !== id,
      ),
    }));
  },

  resetFavoriteIconState: () =>
    set((state) => ({
      userRequestHistory: state.userRequestHistory.map((historyData) =>
        historyData.isUserFavorite === true
          ? { ...historyData, isUserFavorite: false }
          : historyData,
      ),
    })),

  deleteCollection: (targetState: string) => {
    set(() => ({ [targetState]: [] }));
  },
});

export default sidebarSlice;
