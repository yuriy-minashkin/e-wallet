import { styled } from '@mui/material/styles';
import { Autocomplete, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { RoundedBox } from './Table.styled';



export const FilterMonth = ({getMonth}) => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const options = [
    { label: 'January', id: 1 },
    { label: 'February', id: 2 },
    { label: 'March', id: 3 },
    { label: 'April', id: 4 },
    { label: 'May', id: 5 },
    { label: 'June', id: 6 },
    { label: 'July', id: 7 },
    { label: 'August', id: 8 },
    { label: 'September', id: 9 },
    { label: 'October', id: 10 },
    { label: 'November', id: 11 },
    { label: 'December', id: 12 },
  ];

  const handleMonthChange = selectedOption => {
    if (selectedOption) {
       const selectedMonthId = selectedOption.id;
      getMonth(selectedMonthId);
      console.log('Selected Month', selectedMonthId)
    }
  };

  return (
  <Autocomplete
    id="combo-box-demo"
    options={options}
    onChange={(_, selectedOption) => handleMonthChange(selectedOption)}
    isOptionEqualToValue={(option, value) => option.id === value.id}
     renderInput={(params) => (
      <RoundedBox>
        <TextField {...params} label={currentMonth} />
      </RoundedBox>
    )}
  />
);

};
