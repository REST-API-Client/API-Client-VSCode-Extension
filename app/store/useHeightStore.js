import create from "zustand";

import { INITIAL_HEIGHT } from "../constants/height";

const initialState = {
  height: INITIAL_HEIGHT,
};

const useHeightStore = create((set) => ({
  height: initialState.height,

  handleRequestHeightChange: (value) => set(() => ({ height: `${value}vh` })),
}));

export default useHeightStore;
