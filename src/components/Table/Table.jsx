import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { FilterMonth } from 'components/Table/filterMonth';
import { FilterYear } from './filterYear';
import { BasicTable } from './basicTable';

const Box = styled.div`
  max-width: 336px;
  height: 715px;
  margin: 0 auto;
`;
const FiltersBox = styled.div`
  display: flex;
  max-width: 395px;
  height: auto;
  margin: 0 auto;
  gap: 32px;
  mix-blend-mode: 20px;
  margin-bottom: 20px;
  
`;
const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  
`;
const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 153px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 14px;
`;
const TotalExpenses = styled.div`
  color: #ff6596;
`;
const TotalIncom = styled.div`
  color: #24cca7;
`;
const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--main-background-color);
  border-radius: 30px;
  width: 336px;
  height: 58px;
  background-color: var(--form-background-color);
`;
const ItemTitle = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
  
`;
export const Table = ({ data, handlePeriod }) => {
  const isDataPerPeriod = useMemo(() => {
    // console.log('TABLE DATA >>>', data);
    return data?.data?.length > 0 || data?.categoriesSummary?.length > 0;
  }, [data]);

  const currentMonth = useMemo(() => new Date().getMonth() + 1, []);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonth = useCallback(month => {
    setSelectedMonth(month);
  }, []);

  const handleYear = useCallback(year => {
    setSelectedYear(year);
  }, []);

  useEffect(() => {
    if (selectedMonth && selectedYear)
      handlePeriod(selectedMonth, selectedYear);
    if (selectedMonth && !selectedYear)
      handlePeriod(selectedMonth, currentYear);
    if (!selectedMonth && selectedYear)
      handlePeriod(currentMonth, selectedYear);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, selectedYear]);

  return (
    <Box>
      <FiltersBox>
        <FilterMonth getMonth={handleMonth} />
        <FilterYear getYear={handleYear} />
      </FiltersBox>
      {isDataPerPeriod && (
        <CategoryBox>
          {' '}
          <ItemTitle>Category</ItemTitle> <ItemTitle>Sum</ItemTitle>
        </CategoryBox>
      )}
      {isDataPerPeriod && <BasicTable tableData={data.categoriesSummary} />}
      {isDataPerPeriod && (
        <TotalBox>
          <TotalItem>
            <p>Expenses: </p>
            <TotalExpenses>{data.expenseSummary}</TotalExpenses>
          </TotalItem>
          <TotalItem>
            <p>Income: </p> <TotalIncom>{data.incomeSummary}</TotalIncom>
          </TotalItem>
        </TotalBox>
      )}

      {!isDataPerPeriod && <p>There is no data for this period</p>}
    </Box>
  );
};
