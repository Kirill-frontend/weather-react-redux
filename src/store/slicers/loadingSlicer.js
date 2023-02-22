import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const loadingSlicer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { loading } = loadingSlicer.actions;
export default loadingSlicer.reducer;
