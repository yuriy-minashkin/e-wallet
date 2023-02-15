import { ChartDoughnut } from 'components/Chart/Chart'
import { Table } from 'components/Table/Table'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
  padding: 4em;
  background: papayawhip;
  gap: 50px;
`;
const StatisticsTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 20px;
`;
export const DiagramTab = () => {

// У цьому компоненті міститься логіка підписки на redux store, отримання всіх потрібних даних.

//Реалізація методів фільтрації даних.

//І дані шматки стану та методи прокинути пропами в дочірні елементи Table та Chart

  return (
      <Wrapper>
          <StatisticsTitle>Statistics</StatisticsTitle>
          
          <ChartDoughnut />
          
          <Table/>
            
      </Wrapper>
  )
}
