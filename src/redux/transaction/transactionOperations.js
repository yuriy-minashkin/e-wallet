import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { closeModalAddTransaction } from 'redux/global/globalSlice';


export const fetchAllTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (dataInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', dataInfo);
      thunkAPI.dispatch(closeModalAddTransaction());
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransactions',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/transactions/${transactionId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const upDateContacts = createAsyncThunk(
  'transactions/upDateContacts',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/transactions/${transactionId}`);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);