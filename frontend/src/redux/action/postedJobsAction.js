import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../services/apiClient";

export const postedJobs = createAsyncThunk(
    "postedJobs",
    async (id) => {
        const response = await apiClient.get(`/users/${id}/postedJobs`);
        return response.data;
    }
);