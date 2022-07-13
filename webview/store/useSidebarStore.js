import create from "zustand";

const initialState = {
  sidebarOption: "History",
  userHistory: null,
};

const useSidebarStore = create((set) => ({
  sidebarOption: initialState.sidebarOption,
  userHistory: initialState.userHistory,

  handleSidebarOption: (option) => set(() => ({ sidebarOption: option })),

  handleUserHistory: (historyData) => set(() => ({ userHistory: historyData })),
}));

export default useSidebarStore;
