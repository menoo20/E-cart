import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0$',
    },
    {
      value: 250,
      label: '250$',
    },
    {
      value: 500,
      label: '500$',
    },
  ];


const PriceRangeSlider = () => {
    const [value, setValue] = React.useState([0, 500]);
    function valuetext(value) {
        return `${value}$`;
      }
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    
    <Box sx={{
         width: '100%',
         padding: '10px 20px',
         borderRadius: '7px',
         }}>
      <Slider
        getAriaLabel={() => 'Price Range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        min={0}
        max={500}
        sx={{
            color: '#8bd122',
            marginBottom: '0px',
            '& .MuiSlider-thumb':{
                borderRadius: '7px' ,
                '&:hover': {
                    boxShadow: '0px 0px 18px 2px #8bd122',
                  },
            }
        }}
      />
    </Box>
  );
}

export default PriceRangeSlider