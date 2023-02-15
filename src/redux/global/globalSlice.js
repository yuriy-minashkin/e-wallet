import { createSlice } from '@reduxjs/toolkit';


const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isModalAddTransactionOpen: false,
  },

  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
  },
});
export const { openModalAddTransaction, closeModalAddTransaction } =
  globalSlice.actions;
export default globalSlice.reducer;
