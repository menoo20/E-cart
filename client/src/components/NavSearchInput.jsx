import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getCategories } from '../Redux/actions/categoryAction'


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

const NavSearchInput = ({getCategories, categories}) => {
const [categoryName, setCategoryName] = useState("Category")


useEffect(()=>{
  getCategories()
  console.log("i launched once");
}, [])

const handleClick = (e)=>{
    let categoryName = e.target.getAttribute("value");
    setCategoryName(categoryName);

}
  return (
    <form action="" className='d-flex me-2 '>
        <div className="input-group">
            <Button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">{categoryName==="All"? "Category": categoryName}</Button>
            <ul className="dropdown-menu " onClick={e => handleClick(e)}>
            {categoryName === "All" || categoryName === "Category" ? "" :<li><Link className="dropdown-item" to="#" value="All" >All</Link></li>}
                {categories.map(category=>{
                  return (
                    <li key={category._id}>
                      <Link className="dropdown-item" to="#" value={category.name} >
                        {category.name}
                      </Link>
                    </li>
                  )
                })}
            </ul>
            <Input type="text" className="form-control " 
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

function mapStateToProps ({categories}){
  return{
    categories: categories.categories
  }
}

export default connect(mapStateToProps, {getCategories})(NavSearchInput)