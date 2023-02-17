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

export const HomeTab = props => {
  const financeData = useSelector(selectFinanceData);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const compareData = financeData.map(obj => ({
    ...obj,
    transactionDate: Date.parse(obj.transactionDate),
  }));
  const sortDate = [...compareData].sort(
    (a, b) => a.transactionDate - b.transactionDate
  );

  // console.log(sortDate);

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
              <TransactionsList data={sortDate} info={props.info} />
            </>
          )}
        </div>
      )}
    </>
  );
};
