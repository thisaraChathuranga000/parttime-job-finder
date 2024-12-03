import { createSlice } from "@reduxjs/toolkit";
import { postedJobs } from "../action/postedJobsAction";

const initialState = {
  isLoading: false,
  hasError: false,
  postedJobs: [],
};

export const postedJobsSlice = createSlice({
  name: "postedJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postedJobs.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(postedJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.postedJobs = action.payload.postedJobs;
      })
      .addCase(postedJobs.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const {} = postedJobsSlice.actions;
export default postedJobsSlice.reducer;
