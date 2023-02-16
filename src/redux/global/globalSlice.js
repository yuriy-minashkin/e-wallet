import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isModalAddTransactionOpen: false,
    isModalUpDateTransaction: false,
  },

  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    openModalUpDateTransaction(state) {
      state.isModalUpDateTransaction = true;
    },
    closeModalUpDateTransaction(state) {
      state.isModalUpDateTransaction = false;
    },
  },
});
export const {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalUpDateTransaction,
  closeModalUpDateTransaction,
} = globalSlice.actions;
export default globalSlice.reducer;
