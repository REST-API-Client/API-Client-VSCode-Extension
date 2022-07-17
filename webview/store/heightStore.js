import create from "zustand";

import { HEIGHT } from "../constants";

const initialState = {
  height: HEIGHT.INITIAL_HEIGHT,
};

const useHeightStore = create((set) => ({
  height: initialState.height,

  handleRequestHeightChange: (value) => set(() => ({ height: `${value}vh` })),
}));

export default useHeightStore;
