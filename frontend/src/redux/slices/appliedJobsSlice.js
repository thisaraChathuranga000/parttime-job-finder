import { createSlice } from "@reduxjs/toolkit";
import { appliedJobs } from "../action/appliedJobsAction";

const initialState = {
  isLoading: false,
  hasError: false,
  appliedJobs: [],
};

export const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appliedJobs.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(appliedJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.appliedJobs = action.payload.appliedJobs;
      })
      .addCase(appliedJobs.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const {} = appliedJobsSlice.actions;
export default appliedJobsSlice.reducer;
