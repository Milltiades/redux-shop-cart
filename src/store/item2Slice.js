import { createSlice } from "@reduxjs/toolkit";

const item2Slice = createSlice({
  name: "item2",
  initialState: {
    value: 0,
  },
  reducers: {
    increase2: (state, action) => {
      state.value = state.value + 1;
    },
    decrease2: (state, action) => {
      state.value = state.value - 1;
      if (state.value <= 0) {
        state.value = 0;
      }
    },
    remove2: (state) => {
      state.value = 0;
    },
  },
});

export const { increase2, decrease2, remove2 } = item2Slice.actions;

export default item2Slice.reducer;
