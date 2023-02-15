import { GrFormEdit } from 'react-icons/gr';
import {
  deleteTransaction,
} from 'redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';


export const TransactionsList = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {data.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <li key={id}>
            {' '}
            {transactionDate} {type} {categoryId}
            {comment} {amount}
            <button >
              <GrFormEdit />
            </button>
            <button onClick={() => dispatch(deleteTransaction(id))}>
              Delete
            </button>
          </li>
        )
      )}
    </ul>
  );
};
