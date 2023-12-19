import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const MySelect = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Short By</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedValue}
        onChange={handleChange}
        label="Newest"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Opción 1</MenuItem>
        <MenuItem value="option2">Opción 2</MenuItem>
        <MenuItem value="option3">Opción 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MySelect;
