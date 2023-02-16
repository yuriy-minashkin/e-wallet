import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { FilterMonth } from 'components/Table/filterMonth';
import { FilterYear } from './filterYear';
import { BasicTable } from './basicTable';
import { Box, FiltersBox, CategoryBox, ItemTitle, TotalBox, TotalItem, TotalExpenses, TotalIncom } from './Table.styled';

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
            <TotalExpenses>{data.expenseSummary.toFixed(2)}</TotalExpenses>
          </TotalItem>
          <TotalItem>
            <p>Income: </p> <TotalIncom>{data.incomeSummary.toFixed(2)}</TotalIncom>
          </TotalItem>
        </TotalBox>
      )}

      {!isDataPerPeriod && <p>There is no data for this period</p>}
    </Box>
  );
};
