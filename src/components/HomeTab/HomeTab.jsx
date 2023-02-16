import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import {
  selectFinanceData,
  selectIsLoading,
} from 'redux/transaction/transactionSelectors';
import { useSelector } from 'react-redux';
import { fetchAllTransactions } from 'redux/transaction/transactionOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Rings } from 'react-loader-spinner';

export const HomeTab = (props) => {
  const financeData = useSelector(selectFinanceData);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  // console.log(financeData);

// const compareData=(a, b)=> {
//   return a - b;
// }

// const sortFinanceData = financeData.sort(compareData);
// console.log(sortFinanceData);

  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  return (
    <>
      {financeData.length === 0 ? (
        <p> You don't have transactions yet. </p>
      ) : (
        <div>
          {isLoading ? (
            <Rings />
          ) : (
            <>
              <TransactionsList data={financeData} info={props.info}/>
            </>
          )}
        </div>
      )}
    </>
  );
};
