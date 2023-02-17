import React, { useMemo, useRef } from 'react';
import { StyledChartContainer, TotalBalance } from './Chart.styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/auth/authSelectors';
import { formatNumberSaveMinus } from 'utils/serviceFunctions';


ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartDoughnut = React.memo(({ data }) => {
  const userBalance = useSelector(selectBalance);
  const chartRef = useRef(null);

  const dataChart = useMemo(() => {
    const isDataPerPeriod = data && data.length > 0;
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
            hoverOffset: 1,
          },
        ],
      };
    } else {
      return {
        labels: ['No expenses'],
        datasets: [
          {
            label: '',
            data: [1],
            backgroundColor: ['rgb(230, 225, 213)'],
            hoverOffset: 4,
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

  return (
    <StyledChartContainer>
      <Doughnut data={dataChart} options={options} ref={chartRef} />

      <TotalBalance>&#8372; {formatNumberSaveMinus(userBalance)}</TotalBalance>
    </StyledChartContainer>
  );
});
