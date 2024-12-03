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