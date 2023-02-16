import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

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

const CustomAutocomplete = styled(Autocomplete)({
  "& .MuiAutocomplete-paper': {": { 

  borderRadius: '50%',
  width: '152px',
  marginTop: '88px',
  },  
  "& .MuiAutocomplete-inputRoot": {
    "&:hover": {
      backgroundColor: 'transparent',
      borderRadius: '30px'
    },
    "& .MuiAutocomplete-input": {
      backgroundColor: 'transparent',
      color: '#000000'
    }
  },
  "& .MuiAutocomplete-listbox": {
    backgroundColor: '#',
    borderRadius: '30px'
  },
  "& .MuiAutocomplete-option": {
    color: 'transparent'
  }
});

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
  <CustomAutocomplete
    id="combo-box-demo"
    options={options}
    onChange={(_, selectedOption) => handleMonthChange(selectedOption)}
    isOptionEqualToValue={(option, value) => option.id === value.id}
    sx={{ width: 181 }}
    // paperStyle={{
    //   borderRadius: '50%',
    //   width: '152px',
    //   marginTop: '8px',
    // }}
    renderInput={(params) => (
      <RoundedBox>
        <TextField {...params} label={currentMonth} />
      </RoundedBox>
    )}
  />
);

};
