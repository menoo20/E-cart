import React, {useState} from 'react'
import styled from 'styled-components'

const Button = styled.button`
&:focus{
    box-shadow:none !important;
    outline:none;
  }
`
const Input = styled.input`
 &:focus{
   box-shadow:none
 }
`
const Span = styled.span`
 &.input-group-text{
     padding: 0
 }
`

const NavSearchInput = () => {
const [categoryName, setCategoryName] = useState("Category")

const handleClick = (e)=>{
    let categoryName = e.target.getAttribute("value");
    setCategoryName(categoryName);

}
  return (
    <form action="" className='d-flex me-2 '>
        <div className="input-group">
            <Button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">{categoryName==="All"? "Category": categoryName}</Button>
            <ul className="dropdown-menu " onClick={e => handleClick(e)}>
                {categoryName === "All" || categoryName === "Category" ? "" :<li><a className="dropdown-item" href="#" value="All" >All</a></li>}
                <li><a className="dropdown-item" href="#" value="Vegetables" >Vegetables</a></li>
                <li><a className="dropdown-item" href="#" value="Fruits">Fruits</a></li>
                <li><a className="dropdown-item" href="#" value="Bread">Bread</a></li>
            </ul>
            <Input type="text" className="form-control border-bottom-0" 
            aria-label="Text input with dropdown button"
            placeholder='Product name'></Input>
            {/* <Span className="input-group-text submit-text" id="basic-addon1 p-0"> */}
                <button className='btn btn-primary rounded-end input-group-text' type='submit'>
                    <i className='bi bi-search'></i>
                </button>
            {/* </Span> */}
        </div>
    </form>
  )
}

export default NavSearchInput