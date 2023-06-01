import { createSlice } from "@reduxjs/toolkit";

const item3Slice = createSlice({
  name: "item3",
  initialState: {
    value: 0,
  },
  reducers: {
    increase3: (state, action) => {
      state.value = state.value + 1;
    },
    decrease3: (state, action) => {
      state.value = state.value - 1;
      if (state.value <= 0) {
        state.value = 0;
      }
    },
    remove3: (state) => {
      state.value = 0;
    },
  },
});

export const { increase3, decrease3, remove3 } = item3Slice.actions;

export default item3Slice.reducer;
