import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/auth/authSelectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledChartContainer = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
  margin: 0 auto;
`;

const TotalBalance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
`;

export const ChartDoughnut = ({ data }) => {
  const userBalance = useSelector(selectBalance);
  const chartRef = useRef(null);

console.log('Donut data comes here: ', data);

  const isDataPerPeriod = useMemo(() => {

    return data?.data?.length > 0 || data?.length > 0;

  }, [data]);

  console.log(isDataPerPeriod)
  
  const dataChart = useMemo(() => {
    if (isDataPerPeriod) {
      const labels = data.map(item => item.name);
      const values = data.map(item => item.total);
      const color = data.map(item => item.color);
      
      return {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: color,
            borderWidth: 1,
          },
        ],
      };
    }
  }, [data]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <StyledChartContainer>
      {isDataPerPeriod && (
        <Doughnut data={dataChart} options={options} ref={chartRef} />
      )}
      <TotalBalance>${userBalance}</TotalBalance>
    </StyledChartContainer>
  );
};
