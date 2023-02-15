import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';

import React from 'react';

export const FilterYear = () => {
  const options = [
    { label: '2019', id: 1 },
    { label: '2020', id: 2 },
    { label: '2021', id: 3 },
    { label: '2022', id: 4 },
    { label: '2023', id: 5 },
  ];

  const currentYear = new Date().toLocaleString('default', { year: 'numeric' });

  const handleYearChange = selectedOption => {
    if (selectedOption) {
      const selectedYear = selectedOption.label;
      console.log(selectedYear);
    }
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 181 }}
      onChange={(event, selectedOption) => handleYearChange(selectedOption)}
      renderInput={params => (
        <TextField {...params} label={currentYear} variant="outlined" />
      )}
    />
  );
};
