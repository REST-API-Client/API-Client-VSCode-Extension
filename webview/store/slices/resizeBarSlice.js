import { HEIGHT } from "../../constants";

const initialState = {
  requestMenuHeight: HEIGHT.INITIAL_HEIGHT,
};

const resizebarSlice = (set) => ({
  requestMenuHeight: initialState.requestMenuHeight,

  handleRequestHeightChange: (value) =>
    set(() => ({ requestMenuHeight: `${value}vh` })),
});

export default resizebarSlice;
