import { GrFormEdit } from 'react-icons/gr';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFinanceData } from 'redux/transaction/transactionSelectors';
import { openModalUpDateTransaction} from 'redux/global/globalSlice';

export const TransactionsList = ({ data, info }) => {
  console.log(data);
  const financeData = useSelector(selectFinanceData);
  const [trans, setTrans] = useState('');

  const dispatch = useDispatch();

  const saveTransaction = id => {
    dispatch(openModalUpDateTransaction());

    setTrans(financeData.find(trans => trans.id === id));
    console.log('trans', trans);

    info(trans);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Type</th>
          <th>Cotegory</th>
          <th>Comment</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <tr key={id}>
              <td>{transactionDate}</td>
              <td>{type.toLowerCase()}</td>
              <td>{categoryId}</td>
              <td>{comment}</td>
              <td>{amount}</td>
              <td>
                {' '}
                <button onClick={() => saveTransaction(id)}>
                  <GrFormEdit />
                </button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteTransaction(id))}>
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
