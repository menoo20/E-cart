import React, {useState} from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import { Link } from 'react-router-dom'


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

const SearchByCat = ({categories}) => {
    const [categoryName, setCategoryName] = useState("Category")

    const handleClick = (e)=>{
      let categoryName = e.target.getAttribute("value");
      setCategoryName(categoryName);
   
   }
  return (
    <div className="input-group mb-3">
        <Button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">{categoryName==="All"? "Category": categoryName}</Button>
        <ul className="dropdown-menu " onClick={e => handleClick(e)}>
            {categoryName === "All" || categoryName === "Category" ? "" :<li><Link className="dropdown-item" to="#" value="All" >All</Link></li>}
            {categories.map(category=> {
              return (
                <li key={category.name}>
                  <Link className="dropdown-item" to="#" value={category.name}>
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
  return {categories}
}

export default connect(mapStateToProps)(SearchByCat) 