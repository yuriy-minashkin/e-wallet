import { GrFormEdit } from 'react-icons/gr';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFinanceData } from 'redux/transaction/transactionSelectors';
import { openModalUpDateTransaction } from 'redux/global/globalSlice';
import { useEffect } from 'react';
import { selectCategories } from 'redux/categories/categoriesSelectors';

export const TransactionsList = ({ data, info }) => {
  //  console.log(data);

  const sortData = data.map(obj => ({
    ...obj,
    transactionDate: new Date(obj.transactionDate).toISOString().substr(0, 10),
  }));
  // console.log(sortData);
  const categories = useSelector(selectCategories);
  const financeData = useSelector(selectFinanceData);
  const [trans, setTrans] = useState('');
  const dispatch = useDispatch();
  const saveTransaction = id => {
    setTrans(financeData.find(trans => trans.id === id));
  };

  const takeNameCategories = id => {
    let nameCategories = categories.find(categorie => categorie.id === id);
    if (nameCategories) return nameCategories.name;
  };

  useEffect(() => {
    console.log('trans', trans);
    trans && info(trans);
    dispatch(openModalUpDateTransaction());
  }, [dispatch, info, trans]);

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
        {sortData.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <tr key={id}>
              <td>{transactionDate}</td>
              <td>{type.toLowerCase()}</td>
              <td>{takeNameCategories(categoryId)}</td>
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
