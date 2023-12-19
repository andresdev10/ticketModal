import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import search from '../assets/search1.svg'
import { useState } from 'react';

const SearchTextField = () => {
    const [isInputEmpty, setIsInputEmpty] = useState(true);

      const handleInputChange = (event) => {
      setIsInputEmpty(event.target.value === '');
     };
  return (
    <TextField
    
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img
              src={search}
              alt="Search"
              style={{
                width: '24px',
                height: '24px',
                color: '#7E7E7E',
                display: isInputEmpty ? 'block' : 'none',
              }}
            />
            <p
              style={{
                color: '#B5B7C0',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                letterSpacing: '-0.14px',
                display: isInputEmpty ? 'block' : 'none',
              }}
            >
              Search
            </p>
          </InputAdornment>
        ),
      }}
      onChange={handleInputChange}
    />
  );
};

export default SearchTextField;
