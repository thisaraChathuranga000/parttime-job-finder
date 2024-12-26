import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../services/apiClient";

export const getApplicants = createAsyncThunk(
    "applicants",
    async (postId) => {
        const response = await apiClient.get(`/posts/${postId}/applicants`);
        return response.data;
    }
);

export const selectApplicants = createAsyncThunk(
    "selectApplicants",
    async ({body}) => {
        const response = await apiClient.put(`/posts/select-applicant`, body);
        return response.data;
    }
);

export const deleteApplicants = createAsyncThunk(
    "deleteApplicants",
    async ({ userId, postId }, { rejectWithValue }) => {
      try {
        const response = await apiClient.delete(`/posts/remove-applicant`, {
          data: { userId, postId },
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );