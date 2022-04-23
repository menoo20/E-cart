import React, {useState} from 'react'
import styled from "styled-components"

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

const SearchByCat = () => {
    const [categoryName, setCategoryName] = useState("Category")

    const handleClick = (e)=>{
      let categoryName = e.target.getAttribute("value");
      setCategoryName(categoryName);
   
   }
  return (
    <div className="input-group mb-3">
        <Button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">{categoryName==="All"? "Category": categoryName}</Button>
        <ul className="dropdown-menu " onClick={e => handleClick(e)}>
            {categoryName === "All" || categoryName === "Category" ? "" :<li><a className="dropdown-item" href="#" value="All" >All</a></li>}
            <li><a className="dropdown-item" href="#" value="Vegetables" >Vegetables</a></li>
            <li><a className="dropdown-item" href="#" value="Fruits">Fruits</a></li>
            <li><a className="dropdown-item" href="#" value="Bread">Bread</a></li>
        </ul>
        <Input type="text" className="form-control py-2" 
        aria-label="Text input with dropdown button"
        placeholder='Product name'></Input>
    </div>
  )
}

export default SearchByCat