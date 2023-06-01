import { configureStore } from "@reduxjs/toolkit";

import item1Slice from "./item1Slice";
import item2Slice from "./item2Slice";
import item3Slice from "./item3Slice";

const store = configureStore({
  reducer: {
    item1: item1Slice,
    item2: item2Slice,
    item3: item3Slice,
  },
});

export default store;
