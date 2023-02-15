import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { chartConfig } from './chartConfig';

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledChartContainer = styled.div`
  max-width: 288px;
  margin: 0 auto;
`;

export const ChartDoughnut = ({data}) => {

    const labels = data.map((item) => item.name);
    const value = data.map((item) => item.total);
    const backgroundColor = data.map((item) => item.backgroundColor);

    const dataChart = {
    labels: labels || [],
  datasets: [
    {
      data: value,
      backgroundColor: backgroundColor || chartConfig.colors,
      borderWidth: 1,
    },
  ],}

  return (
    <StyledChartContainer>
      <Doughnut data={dataChart} />
    </StyledChartContainer>
  );
};
