import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../services/apiClient";

export const appliedJobs = createAsyncThunk(
    "appliedJobs",
    async (id) => {
        const response = await apiClient.get(`/users/${id}/appliedJobs`);
        return response.data;
    }
);