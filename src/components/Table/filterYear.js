import { TextField, Autocomplete } from '@mui/material';
import React, { useMemo, useCallback } from 'react';
import { RoundedBox } from './Table.styled';
  
const options = [
    { label: '2019', id: 1 },
    { label: '2020', id: 2 },
    { label: '2021', id: 3 },
    { label: '2022', id: 4 },
    { label: '2023', id: 5 },
];
  
export const FilterYear = ({ getYear }) => {

  const currentYear = useMemo(
    () => new Date().toLocaleString('default', { year: 'numeric' }),
    []
  );

  const handleYearChange = useCallback(
    selectedOption => {
      if (selectedOption) {
        const selectedYear = selectedOption.label;
        getYear(selectedYear);
      }
    },
    [getYear]
  );

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      onChange={(_, selectedOption) => handleYearChange(selectedOption)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={params => (
        <RoundedBox>
          <TextField {...params} label={currentYear} variant="outlined" />
        </RoundedBox>
      )}
    />
  );
};
