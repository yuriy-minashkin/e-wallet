import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledChartContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const ChartDoughnut = () => {

    const doughnutChart = {
   
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
     
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
     
      borderWidth: 1,
    },
  ],
};


  return (
    <StyledChartContainer>
          <Doughnut data={doughnutChart} />
    </StyledChartContainer>
  );
};
