import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { selectAddTransactionOpen } from 'redux/global/globalSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useEffect } from 'react';
import { fetchCategories } from 'redux/categories/categoriesOperations';


const HomePage = () => {
  const isModalAddTransactionOpen = useSelector(selectAddTransactionOpen);
  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCategories());
    }, [dispatch]);

  // console.log('isModalAddTransactionOpen', isModalAddTransactionOpen);
  return (
    <>
      <HomeTab />
      <ButtonAddTransactions />
      {isModalAddTransactionOpen && <ModalAddTransaction/>}
    </>
  );
};

export default HomePage;
