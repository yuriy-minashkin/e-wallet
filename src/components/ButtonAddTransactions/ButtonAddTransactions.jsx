import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/global/globalSlice';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(openModalAddTransaction())}>Add</button>
  );
};
