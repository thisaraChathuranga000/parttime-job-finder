import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../services/apiClient";

export const login = createAsyncThunk(
    "auth/login",
    async (credentials) => {
        const response = await apiClient.post("/auth/login", credentials);
        return response.data;
    }
);

export const updateUser = createAsyncThunk(
    "updateUser",
    async ({ body, id }) => {
        const response = await apiClient.put(`/users/${id}`, body);
        return response.data;
    }
);
  export const createNewUser = createAsyncThunk(
    "createUser",
    async (body) => {
      const formData = new FormData();
      for (const key in body) {
        formData.append(key, body[key]);
      }
  
      const response = await apiClient.post(`/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    }
);