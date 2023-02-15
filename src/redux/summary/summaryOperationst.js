import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSummary = createAsyncThunk(
  'summary/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions-summary');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
