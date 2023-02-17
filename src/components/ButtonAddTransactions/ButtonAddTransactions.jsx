import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/global/globalSlice';
import { Button } from './ButtonAddTransactions.styled';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(openModalAddTransaction())}>Add</Button>
  );
};
