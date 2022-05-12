// import React, { useState } from 'react'
// import Typography from '@mui/material/Typography';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { connect } from 'react-redux';
// import {choosePageAndLimit} from "../Redux/actions"

// const Paginator = ({page}) => {
//     const [index, setIndex] = useState(page);

//     const handleChange = (event, value) => {
      
//     };
  
//     return (
//       <Stack spacing={3} paddingBottom={3} alignItems={"center"} justifyContent={"between"}>
//         <Typography>Page: {page}</Typography>
//         <Pagination 
//         count={8}
//         page={2} 
//         onChange={handleChange} 
//         style={{backgroundColor: "transparent"}}
        
//         />
//       </Stack>
//     );
// }

// const mapStateToProps = ({categories, products})=>{
//   console.log(categories, products)
//   return {
//       page: categories.page,
//       limit: categories.limit,
//       nextPage: categories.nextPage,
//       previousPage: categories.previousPage,
//       sort: categories.sort,
//       price: categories.price,
//       category: products.category,
//       totalPages: products.totalPages,
//       totalDocuments: products.totalDocuments,

//   }

// }


// export default connect(mapStateToProps, {choosePageAndLimit})(Paginator)