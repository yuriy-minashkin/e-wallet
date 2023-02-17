import { GrFormEdit } from 'react-icons/gr';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFinanceData } from 'redux/transaction/transactionSelectors';
import { openModalUpDateTransaction } from 'redux/global/globalSlice';
import { useEffect } from 'react';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import {
  Container,
  Table,
  TrHead,
  ThDay,
  ThType,
  ThCategore,
  ThComment,
  ThCurrency,
  ThEdit,
  ThDel,
  TrData,
  TdDate,
  TdType,
  TdCadegory,
  TdComment,
  TdAmount,
  TdEdit,
  TdDel,
  EditButton,
  DelButton,
} from './TransactionsList.styled';

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
    <Container>
      <Table>
        <thead>
          <TrHead>
            <ThDay>Date</ThDay>
            <ThType>Type</ThType>
            <ThCategore>Cotegory</ThCategore>
            <ThComment>Comment</ThComment>
            <ThCurrency>Currency</ThCurrency>
            <ThEdit></ThEdit>
            <ThDel></ThDel>
          </TrHead>
        </thead>
        <tbody>
          {sortData.map(
            ({ id, transactionDate, type, categoryId, comment, amount }) => (
              <TrData key={id}>
                <TdDate>{transactionDate}</TdDate>
                <TdType>{type.toLowerCase() === 'income' ? '+' : '-'}</TdType>
                <TdCadegory>{takeNameCategories(categoryId)}</TdCadegory>
                <TdComment>{comment}</TdComment>
                <TdAmount type={type}>{amount.toFixed(2)}</TdAmount>
                <TdEdit>
                  <EditButton onClick={() => saveTransaction(id)}>
                    <GrFormEdit style={{ display:'flex',  alignItems: 'center', width: '30px', height: '30px' }} />
                  </EditButton>
                </TdEdit>
                <TdDel>
                  <DelButton onClick={() => dispatch(deleteTransaction(id))}>
                    Delete
                  </DelButton>
                </TdDel>
              </TrData>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
};
