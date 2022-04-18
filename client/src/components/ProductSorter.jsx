import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductSorter() {
  const [sort, setSort] = useState('Most Popular');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ 
        minWidth: 120,
         }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort by"
          onChange={handleChange}
          sx={{
              '& #demo-simple-select' : {
                padding: '14px 32px 14px 14px'
              } 
          }}
        >
          <MenuItem value="Highest Price">Highest Price</MenuItem>
          <MenuItem value="Newest">Newest</MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
          <MenuItem value="Most Popular" >Most Popular</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
