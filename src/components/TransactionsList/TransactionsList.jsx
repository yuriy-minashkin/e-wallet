import { GrFormEdit } from 'react-icons/gr';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFinanceData } from 'redux/transaction/transactionSelectors';
import { openModalUpDateTransaction} from 'redux/global/globalSlice';
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
          {data.map(
            ({ id, transactionDate, type, categoryId, comment, amount }) => (
              <TrData key={id}>
                <TdDate>{transactionDate}</TdDate>
                <TdType>{type.toLowerCase() === 'income' ? '+' : '-'}</TdType>
                <TdCadegory>{categoryId}</TdCadegory>
                <TdComment>{comment}</TdComment>
                <TdAmount type={type}>{amount.toFixed(2)}</TdAmount>
                <TdEdit>
                  <EditButton onClick={() => saveTransaction(id)}>
                    <GrFormEdit style={{ width:"30px", height:"30px" }} />
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
