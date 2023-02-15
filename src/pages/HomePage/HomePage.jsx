import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { selectAddTransactionOpen } from 'redux/global/globalSelectors';
import { useSelector } from 'react-redux';
// import {ModalAddTransaction} from 'components/ModalAddTransaction/ModalAddTransaction'

export const HomePage = () => {
  const isModalAddTransactionOpen = useSelector(selectAddTransactionOpen);

  console.log('isModalAddTransactionOpen', isModalAddTransactionOpen);
  return (
    <>
      <HomeTab />
      <ButtonAddTransactions />
      {/* {isModalAddTransactionOpen && <ModalAddTransaction/>} */}
    </>
  );
};
