import { StateCreator } from "zustand";
import { HEIGHT } from "../../constants";

import { IResizseBarSlice } from "./type";

const resizebarSlice: StateCreator<
  IResizseBarSlice,
  [],
  [],
  IResizseBarSlice
> = (set) => ({
  requestMenuHeight: HEIGHT.INITIAL_HEIGHT,

  handleRequestHeightChange: (value: number) =>
    set(() => ({ requestMenuHeight: `${value}vh` })),
});

export default resizebarSlice;
