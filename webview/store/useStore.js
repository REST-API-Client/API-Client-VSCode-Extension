import create from "zustand";

import keyValueTableDataSlice from "./slices/keyValueTableDataSlice";
import requestDataSlice from "./slices/requestDataSlice";
import resizeBarSlice from "./slices/resizeBarSlice";
import responseDataSlice from "./slices/responseDataSlice";
import sidebarSlice from "./slices/sidebarSlice";

const useStore = create((set) => ({
  ...sidebarSlice(set),
  ...resizeBarSlice(set),
  ...requestDataSlice(set),
  ...responseDataSlice(set),
  ...keyValueTableDataSlice(set),
}));

export default useStore;
