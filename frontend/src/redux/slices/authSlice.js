import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../services/apiClient";

const initialState = {
  email:"",
  password:"",
  userDetails: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail:(state, action) =>{
      state.email = action.payload;
    },
    setPassword:(state, action) =>{
      state.password = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
      setAuthToken(action.payload);
    },
    setUser: (state, action) => {
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.userDetails = null;
      setAuthToken(null);
    },
  },
});

export const { setToken, setUser, logout, setEmail, setPassword} = authSlice.actions;
export default authSlice.reducer;
