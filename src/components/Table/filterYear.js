import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';
import React, { useMemo, useCallback } from 'react';
import Box from '@mui/material/Box';

const RoundedBox = styled(Box)({
  borderRadius: '30px',
  overflow: 'hidden',
  width: '152px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fffff',
  border: '1px solid #000000',
});


export const FilterYear = ({getYear}) => {
  const options = [
    { label: '2019', id: 1 },
    { label: '2020', id: 2 },
    { label: '2021', id: 3 },
    { label: '2022', id: 4 },
    { label: '2023', id: 5 },
  ];

  const currentYear = useMemo(() =>  new Date().toLocaleString('default', { year: 'numeric' }), []);;

  const handleYearChange = useCallback((selectedOption) => {
    if (selectedOption) {
      const selectedYear = selectedOption.label;
      getYear(selectedYear);
    }
  }, [getYear]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 181 }}
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
