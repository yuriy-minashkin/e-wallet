import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSummary = createAsyncThunk(
  'summary/fetchAll',
  async ({month, year}, thunkAPI) => {
      try {
      const { data } = await axios.get('/transactions-summary?month=' + month + '&year=' + year);
      console.log('Make Fetch >>>  back DATA >>>', data)

      return data;
    } catch (e) {console.log(e)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
