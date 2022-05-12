import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {connect} from "react-redux";
import { getProducts, choosePriceRange } from '../Redux/actions';

const marks = [
    {
      value: 0,
      label: '0$',
    },
    {
      value: 25,
      label: '25$',
    },
    {
      value: 50,
      label: '50$',
    },
  ];


const PriceRangeSlider = ({choosePriceRange, getProducts, category, sort, price}) => {
    const [value, setValue] = React.useState([0, 50]);
    const [debouncedValue, setDebounce] = useState({});

    useEffect(()=>{
      const timedChange = setTimeout(()=>{
        if(value != [0,50]){
          setDebounce({lte: value[0], gte: value[1]})
        }

      }, 300)
      return  ()=> clearTimeout(timedChange)
    }, [value])

    useEffect(()=>{
        if(debouncedValue){
          
          getProducts(category, sort.query, debouncedValue);
          choosePriceRange(debouncedValue)
        }
  }, [debouncedValue])



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
        max={50}
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

const mapStateToProps = ({categories})=>{
return{
  category: categories.category,
  sort:  categories.sort,
  price: categories.price
}

}

export default connect(mapStateToProps, {getProducts, choosePriceRange})(PriceRangeSlider)