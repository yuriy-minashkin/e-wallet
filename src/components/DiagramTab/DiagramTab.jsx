import { ChartDoughnut } from 'components/Chart/Chart';
import { Table } from 'components/Table/Table';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary } from 'redux/summary/summaryOperationst';
import { selectSummary } from 'redux/summary/summarySelectors';
import styled from 'styled-components';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: papayawhip;
  gap: 5px;
`;
const Box = styled.section`
  max-height: 676px;
  width: 715px;
  display: flex;
`;

const StatisticsTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 20px;
`;

export const DiagramTab = () => {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(fetchSummary({ month: currentMonth, year: currentYear }));
  }, []);

  const handleFilterChange = ( month, year ) => {
   
    if (!month && !year) {
      dispatch(fetchSummary({ month: currentMonth, year: currentYear }));
    } else if (!month)
      dispatch(fetchSummary({ month: month, year: currentYear }));
    else if (!year) dispatch(fetchSummary({ month: currentMonth, year: year }));
    else dispatch(fetchSummary({ month: month, year: year }));
  };

  const dataFetch = summary;
  // {
  //   categoriesSummary: [
  //     {
  //       name: 'car',
  //       type: 'INCOME',
  //       total: 10,
  //         },

  //     {
  //       name: 'beer',
  //       type: 'INCOME',
  //       total: 20,
  //     },
  //     {
  //       name: 'food',
  //       type: 'EXPENSE',
  //       total: 30,
  //     },
  //     {
  //       name: 'household products',
  //       type: 'EXPENSE',
  //       total: 40,
  //     },
  //     {
  //       name: 'IT',
  //       type: 'EXPENSE',
  //       total: 40,
  //     },
  //     {
  //       name: 'leisure',
  //       type: 'EXPENSE',
  //       total: 40,
  //     },
  //     {
  //       name: 'other',
  //       type: 'EXPENSE',
  //       total: 40,
  //     },
  //   ],
  //   incomeSummary: 30,
  //   expenseSummary: 70,
  //   periodTotal: 0,
  //   year: 2020,
  //   month: 12,
  // };

  // const {
  //   categoriesSummary,
  //   incomeSummary,
  //   expenseSummary,
  //   periodTotal,
  //   year,
  //   month,
  // } = dataFetch;

  useEffect(() => {
    if (dataFetch.length > 0) {
      dataFetch.categoriesSummary = dataFetch.categoriesSummary.map(
        category => {
          const randomColor = `rgb(${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )})`;
          return { ...category, backgroundColor: randomColor };
        }
      );
    } else return;
  }, [dataFetch, summary]);

  return (
    <Wrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <Box>
        <ChartDoughnut data={dataFetch} />
        <Table data={dataFetch} handlePeriod={handleFilterChange} />
      </Box>
    </Wrapper>
  );
};
