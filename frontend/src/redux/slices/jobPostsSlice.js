import { createSlice } from "@reduxjs/toolkit";
import { postJob, getPostById, getAllPost } from "../action/jobPostsAction";

const initialState = {
  isLoading: false,
  hasError: false,
  jobs: [],
  jobPost: {
    file: null,
    userId: "",
    title: "",
    description: "",
    location: "",
    startingTime: "",
    payment: "",
  },
  postedJob: {},
  selectedJob:{}
};

export const JobPostsSlice = createSlice({
  name: "jobPosts",
  initialState,
  reducers: {
    setJobPost: (state, action) => {
      const { key, value } = action.payload;
      state.jobPost[key] = value;
    },
    setJobPostClear:(state)=>{
      state.jobPost.file = null;
      state.jobPost.userId = "";
      state.jobPost.title = "";
      state.jobPost.description = "";
      state.jobPost.location = "";
      state.jobPost.startingTime = "";
      state.jobPost.payment = "";
    },
    setPostedJobClear:(state)=>{
      state.postedJob = {};
    },
    setSelectedJobClear: (state) => {
      state.selectedJob = {};
    }
  },
  extraReducers: (builder) => {
    builder
      //Post Job
      .addCase(postJob.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.postedJob = action.payload;
      })
      .addCase(postJob.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })

      //Get Post By Id
      .addCase(getPostById.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.selectedJob = action.payload;
      })
      .addCase(getPostById.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })

      //Get all Posts
      .addCase(getAllPost.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.jobs = action.payload;
      })
      .addCase(getAllPost.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { setJobPost, setJobPostClear, setPostedJobClear } = JobPostsSlice.actions;
export default JobPostsSlice.reducer;
