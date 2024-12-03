import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../services/apiClient";
import { login, updateUser } from "../action/authUsersAction";

const initialState = {
  email: "",
  password: "",
  userDetails: null,
  accessToken: null,
  isLoading: false,
  hasError: false,
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.userDetails = null;
      state.email = "";
      state.password = "";
      setAuthToken(null);
    },
    updateUserDetails: (state, action) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.userDetails = action.payload.userDetails;
        state.accessToken = action.payload.access_token;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })

      //update user
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.userDetails = action.payload;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const {
  setToken,
  setUser,
  logout,
  setEmail,
  setPassword,
  updateUserDetails
} = authUserSlice.actions;
export default authUserSlice.reducer;
