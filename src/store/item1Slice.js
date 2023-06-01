import { createSlice } from "@reduxjs/toolkit";

const item1Slice = createSlice({
  name: "item1",
  initialState: {
    value: 0,
  },
  reducers: {
    increase1: (state, action) => {
      state.value = state.value + 1;
    },
    decrease1: (state, action) => {
      state.value = state.value - 1;
      if (state.value <= 0) {
        state.value = 0;
      }
    },
    remove1: (state) => {
      state.value = 0;
    },
  },
});

export const { increase1, decrease1, remove1 } = item1Slice.actions;

export default item1Slice.reducer;
