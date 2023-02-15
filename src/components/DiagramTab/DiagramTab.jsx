import { ChartDoughnut } from 'components/Chart/Chart';
import { Table } from 'components/Table/Table';
import React from 'react';
import styled from 'styled-components';
import { TableStatistics } from './../Table/Table';

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
  const dataFetch = {
    categoriesSummary: [
      {
        name: 'car',
        type: 'INCOME',
        total: 10,
          },
      
      {
        name: 'beer',
        type: 'INCOME',
        total: 20,
      },
      {
        name: 'food',
        type: 'EXPENSE',
        total: 30,
      },
      {
        name: 'household products',
        type: 'EXPENSE',
        total: 40,
      },
      {
        name: 'IT',
        type: 'EXPENSE',
        total: 40,
      },
      {
        name: 'leisure',
        type: 'EXPENSE',
        total: 40,
      },
      {
        name: 'other',
        type: 'EXPENSE',
        total: 40,
      },
    ],
    incomeSummary: 30,
    expenseSummary: 70,
    periodTotal: 0,
    year: 2020,
    month: 12,
  };

  const {
    categoriesSummary,
    incomeSummary,
    expenseSummary,
    periodTotal,
    year,
    month,
  } = dataFetch;

  dataFetch.categoriesSummary = dataFetch.categoriesSummary.map(category => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    return { ...category, backgroundColor: randomColor };
  });

  // Використовуючи хук useSelector з react-redux отримати дані зі стору.
  // У цьому компоненті міститься логіка підписки на redux store, отримання всіх потрібних даних.
  //Реалізація методів фільтрації даних.
  //І дані шматки стану та методи прокинути пропами в дочірні елементи Table та Chart

  return (
    <Wrapper>
      
        <StatisticsTitle>Statistics</StatisticsTitle>
<Box>
        <ChartDoughnut data={dataFetch.categoriesSummary} />

        <TableStatistics data={dataFetch}/>
      </Box>
    </Wrapper>
  );
};
