import { createSlice } from "@reduxjs/toolkit";
import { getApplicants } from "../action/applicantsAction";

const initialState = {
  isLoading: false,
  hasError: false,
  applicantData: {},
};

export const applicantsSlice = createSlice({
  name: "applicants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApplicants.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getApplicants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.applicantData = action.payload;
      })
      .addCase(getApplicants.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const {} = applicantsSlice.actions;
export default applicantsSlice.reducer;
