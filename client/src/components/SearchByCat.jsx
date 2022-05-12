import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import {getProducts, chooseCat} from "../Redux/actions"


const Button = styled.button`
&:focus{
    box-shadow:none !important;
    outline:none;
  }
`

const Input = styled.input`
 padding: 12px !important;
 &:focus{
   box-shadow:none
 }
`

const SearchByCat = ({categories, getProducts, chooseCat, category, sort, price, page, limit}) => {
    const [categoryName, setCategoryName] = useState(category.name? category.name: "Category");

    useEffect(()=>{
      if(category.name)
      setCategoryName(category.name)
    })

    const handleClick = (e)=>{
      let categoryName = e.target.getAttribute("value");
      if(categoryName == "All" || categoryName == "Category"){
        chooseCat("")
        getProducts("", sort.query, price, page, limit)
      }
      
      setCategoryName(categoryName);

   }

   const handleCategory = (e, category)=>{
      getProducts(category, sort.query, price, page, limit).then(_=> chooseCat(category))
      
   }
  return (
    <div className="input-group mb-3">
        <Button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">{categoryName==="All"? "Category": categoryName}</Button>
        <ul className="dropdown-menu " onClick={e => handleClick(e)}>
            {categoryName === "All" || categoryName === "Category" ? "" :<li><Link className="dropdown-item" to="#" value="All" >All</Link></li>}
            {categories.map(category=> {
              return (
                <li key={category.name}>
                  <Link className="dropdown-item" to="#" value={category.name} onClick={(e) =>handleCategory(e, category)}>
                  {category.name}
                  </Link>
                </li>
              )
            })}
        </ul>
        <Input type="text" className="form-control py-2" 
        aria-label="Text input with dropdown button"
        placeholder='Product name'></Input>
    </div>
  )
}

const mapStateToProps = ({categories}) => {
  return {
    categories: categories.categories,
    category: categories.category,
    sort: categories.sort,
    price: categories.price,
    page: categories.page,
    limit: categories.limit
  }
}

export default connect(mapStateToProps, {getProducts, chooseCat})(SearchByCat) 