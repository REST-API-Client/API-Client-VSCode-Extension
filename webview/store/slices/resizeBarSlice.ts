import { StateCreator } from "zustand";
import { HEIGHT } from "../../constants";

import { IResizseBarSlice } from "./type";
const initialState: IResizseBarSlice = {
  requestMenuHeight: HEIGHT.INITIAL_HEIGHT,
};

const resizebarSlice: StateCreator<
  IResizseBarSlice,
  [],
  [],
  IResizseBarSlice
> = (set) => ({
  requestMenuHeight: initialState.requestMenuHeight,

  handleRequestHeightChange: (value: number) =>
    set(() => ({ requestMenuHeight: `${value}vh` })),
});

export default resizebarSlice;
