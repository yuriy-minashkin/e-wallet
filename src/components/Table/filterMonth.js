import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';

import React, { useState } from 'react';

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
      sx={{ width: 181 }}
      renderInput={params => <TextField {...params} label={currentMonth} />}
    />
  );
};
