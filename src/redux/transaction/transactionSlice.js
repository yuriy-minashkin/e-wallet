import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAllTransactions,
  addTransaction,
  deleteTransaction,
  upDateContacts,
} from './transactionOperations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setPending = state => {
  state.isLoading = true;
};

const extraActions = [
  fetchAllTransactions,
  addTransaction,
  deleteTransaction,
  upDateContacts,
];
const createActions = type => {
  return extraActions.map(action => action[type]);
};

const transactionSlice = createSlice({
  name: 'finance',
  initialState: {
    finance: {
      data: [{ id: 0,}],
      totalBalance: 0,
    },
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllTransactions.fulfilled, (state, { payload }) => {
        state.finance.data = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.finance.data.push(payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.finance.data = state.finance.data.filter(
          trans => trans.id !== action.payload.id
        );
      })
      .addCase(upDateContacts.fulfilled, (state, { payload }) => {
        state.finance.data = { ...payload };
      })
      .addMatcher(isAnyOf(...createActions('pending')), setPending)
      .addMatcher(isAnyOf(...createActions('rejected')), setError);
  },
});

export default transactionSlice.reducer;
