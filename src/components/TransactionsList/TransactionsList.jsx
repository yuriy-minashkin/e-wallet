import { GrFormEdit } from 'react-icons/gr';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';

export const TransactionsList = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();
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
              <td>{type}</td>
              <td>{categoryId}</td>
              <td>{comment}</td>
              <td>{amount}</td>
              <td>
                {' '}
                <button>
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
    // <ul>
    //   {data.map(
    //     ({ id, transactionDate, type, categoryId, comment, amount }) => (
    //       <li key={id}>
    //         {' '}
    //         {transactionDate} {type} {categoryId}
    //         {comment} {amount}
    //         <button>
    //           <GrFormEdit />
    //         </button>
    //         <button onClick={() => dispatch(deleteTransaction(id))}>
    //           Delete
    //         </button>
    //       </li>
    //     )
    //   )}
    // </ul>
  );
};
