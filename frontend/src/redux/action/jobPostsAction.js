import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../services/apiClient";

export const postJob = createAsyncThunk(
    "postJob",
    async (body) => {
      const formData = new FormData();
      for (const key in body) {
        formData.append(key, body[key]);
      }
  
      const response = await apiClient.post(`/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    }
);

export const getPostById = createAsyncThunk(
    "getPostById",
    async (id) => {
        const response = await apiClient.get(`/posts/${id}`);
        return response.data;
    }
);

export const deletePostById = createAsyncThunk(
  "deletePostById",
  async (id) => {
      const response = await apiClient.delete(`/posts/${id}`);
      return response.data;
  }
);