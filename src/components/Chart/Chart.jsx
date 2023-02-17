import React, { useEffect, useMemo, useRef } from 'react';
import { StyledChartContainer, TotalBalance } from './Chart.styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/auth/authSelectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartDoughnut = ({ data }) => {
  const userBalance = useSelector(selectBalance);
  const chartRef = useRef(null);

  // console.log('Donut data comes here: ', data);

  const isDataPerPeriod = useMemo(() => {
    return data?.data?.length > 0 || data?.length > 0;
  }, [data]);

  // console.log(isDataPerPeriod)

  const dataChart = useMemo(() => {
    if (isDataPerPeriod) {
      const labels = data.map(item => item.name);
      const values = data.map(item => Math.abs(item.total));
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
    cutout: 95,
  };

 
  function addSpaces(number) {
  const str = number.toFixed(2).toString();
  const parts = [];
  for (let i = str.length; i > 0; i -= 3) {
    parts.unshift(str.substring(Math.max(0, i - 3), i));
  }
  return parts.join(" ");
  }
  
const formattedNumber = addSpaces(userBalance);
  return (
    <StyledChartContainer>
      {isDataPerPeriod && (
        <Doughnut data={dataChart} options={options} ref={chartRef} />
      )}
      <TotalBalance>&#8372; {formattedNumber}</TotalBalance>
    </StyledChartContainer>
  );
};
