import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchCategories = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction-categories');
     return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


