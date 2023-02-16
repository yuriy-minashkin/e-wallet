import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from 'components/HomeTab/HomeTab';
import {
  selectAddTransactionOpen,
  selectUpDateTransactionsModal,
} from 'redux/global/globalSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useEffect } from 'react';
import { fetchCategories } from 'redux/categories/categoriesOperations';
import { useState } from 'react';
import { UpDateModal } from 'components/upDateModal/upDateModal';
import { BlockForAddButton } from './HomePage.styled';

const HomePage = () => {
  const isModalAddTransactionOpen = useSelector(selectAddTransactionOpen);
  const isModalUpDateTransaction = useSelector(selectUpDateTransactionsModal);
  const dispatch = useDispatch();
  const [data,setData]= useState(null)

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

 

  return (
    <BlockForAddButton>
      <HomeTab info={setData} />
      <ButtonAddTransactions />
      {isModalUpDateTransaction && <UpDateModal trans={data} />}
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </BlockForAddButton>
  );
};

export default HomePage;
