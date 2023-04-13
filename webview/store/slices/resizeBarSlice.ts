import { HEIGHT } from "../../constants";

const initialState = {
  requestMenuHeight: HEIGHT.INITIAL_HEIGHT,
};

const resizebarSlice = (set: any) => ({
  requestMenuHeight: initialState.requestMenuHeight,

  handleRequestHeightChange: (value: number) =>
    set(() => ({ requestMenuHeight: `${value}vh` })),
});

export default resizebarSlice;
