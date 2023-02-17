import { Autocomplete, TextField } from '@mui/material';
import React, {useMemo} from 'react';
import { RoundedBox } from './Table.styled';

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

export const FilterMonth = ({ getMonth }) => {
  const currentMonth = useMemo(() => {
    return options.find(option => option.id === new Date().getMonth() + 1).label;
  }, []);

  const handleMonthChange = selectedOption => {
    if (selectedOption) {
      getMonth(selectedOption.id);
    }
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      onChange={(_, selectedOption) => handleMonthChange(selectedOption)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={params => (
        <RoundedBox>
          <TextField {...params} label={currentMonth} />
        </RoundedBox>
      )}
    />
  );
};
