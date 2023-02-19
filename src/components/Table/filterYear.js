import { TextField, Autocomplete } from '@mui/material';
import React, { useMemo, useCallback } from 'react';

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
      sx={[
        { width: 181 },
        { height: 50 },

        {
          '& .MuiOutlinedInput-root': {
            borderRadius: 30,
          },
        },
      ]}
      disablePortal
      id="combo-box-demo"
      options={options}
      onChange={(_, selectedOption) => handleYearChange(selectedOption)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={params => (
        <TextField
          {...params}
          label={currentYear}
          variant="outlined"
          sx={{
            borderRadius: 30,
          }}
        />
      )}
    />
  );
};
