import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect } from 'react-redux';
import {getProducts, chooseSort} from "../Redux/actions"

 function ProductSorter({getProducts, category, chooseSort, sorter, price}) {

  const [sort, setSort] = useState(sorter.value? sorter.value : "Most Popular");


  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleClick = (e) => {
    const sorting = e.currentTarget.dataset
    
    getProducts(category, sorting.query, price).then(_=>{
      chooseSort({value: sorting.value, query: sorting.query});
    });

  }

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
          <MenuItem data-query="highestPrice" value="Highest Price" onClick={e => handleClick(e)}>Highest Price</MenuItem>
          <MenuItem data-query="newest" value="Newest" onClick={e => handleClick(e)}>Newest</MenuItem>
          <MenuItem data-query="oldest" value="Oldest" onClick={e => handleClick(e)}>Oldest</MenuItem>
          <MenuItem data-query="mostPopular" value="Most Popular"  onClick={e => handleClick(e)}>Most Popular</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const mapStateToProps =  ({categories})=>{
    return{
      category: categories.category,
      sorter:  categories.sort? categories.sort : "Most Popular" ,
      price: categories.price
    }
}

export default connect(mapStateToProps, {getProducts, chooseSort})(ProductSorter)