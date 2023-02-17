import { ChartDoughnut } from 'components/Chart/Chart';
import { Table } from 'components/Table/Table';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary } from 'redux/summary/summaryOperationst';
import { selectSummary } from 'redux/summary/summarySelectors';
import { Wrapper, StatisticsTitle, Box } from './DiagramTab.styled';
import { colorMap } from './colorMap';
import {
  deleteIncomeInArray,
  addArrayToObj,
  addColorToArray,
} from './serviceFunctions';

export const DiagramTab = () => {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const [renderChart, setRenderChart] = useState('');
  const [renderTable, setRenderTable] = useState('');

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(fetchSummary({ month: currentMonth, year: currentYear }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterChange = (month, year) => {
    if (!month && !year) {
      dispatch(fetchSummary({ month: currentMonth, year: currentYear }));
    } else if (!month)
      dispatch(fetchSummary({ month: month, year: currentYear }));
    else if (!year) dispatch(fetchSummary({ month: currentMonth, year: year }));
    else dispatch(fetchSummary({ month: month, year: year }));
  };

  useEffect(() => {
    if (summary.length === 0 || summary === undefined) return;

    const updatedCategoriesSummary = addColorToArray(summary, colorMap);

    setRenderChart(deleteIncomeInArray(updatedCategoriesSummary));
    setRenderTable(
      addArrayToObj(summary, deleteIncomeInArray(updatedCategoriesSummary))
    );
  }, [summary]);

  return (
    <Wrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <Box>
        <ChartDoughnut data={renderChart} />
        <Table data={renderTable} handlePeriod={handleFilterChange} />
      </Box>
    </Wrapper>
  );
};
