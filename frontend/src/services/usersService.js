import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from './apiClient';
import { setToken, setUser } from '../redux/slices/authSlice';
import axios from 'axios';
import { setAuthToken } from './apiClient';

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { dispatch, rejectWithValue }) => {
      try {
        const response = await apiClient.post('/auth/login', credentials);
        const { userDetails, access_token } = response.data;

        dispatch(setToken(access_token));
        dispatch(setUser(userDetails)); 
  
        return response.data;
      } catch (error) {
        alert("login failed")
        return rejectWithValue(error.response.data);
      }
    }
);   