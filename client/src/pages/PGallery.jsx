import React, {useState} from 'react'
import BreadCrumb from '../components/BreadCrumb'
import AllFood from "../images/allfood.jpg"
import ProductsList from "../components/ProductsList"
import styled from "styled-components"
import PriceRangeSlider from '../components/PriceRangeSlider'
import ProductSorter from '../components/ProductSorter'

const Input = styled.input`
 &:focus{
   box-shadow:none
 }
`
const Button = styled.button`
&:focus{
    box-shadow:none !important;
    outline:none;
  }
`

const PGallery = () => {
  const [cat, setCat] = useState("All")
  return (
    <React.Fragment>
    <BreadCrumb img={AllFood} cat={cat} catDesc={"Shop Through Millons Of Our Finest Products"}/>
    <div className='row justify-content-around align-items-center Categories-Filter px-4 py-5' >
        <div className="col-md-4">
            <div className="input-group mb-3">
                <Button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Category</Button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Vegetables</a></li>
                    <li><a className="dropdown-item" href="#">Fruits</a></li>
                    <li><a className="dropdown-item" href="#">Bread</a></li>
                </ul>
                <Input type="text" className="form-control" 
                aria-label="Text input with dropdown button"
                placeholder='Product name'></Input>
            </div>
        </div>
        <div className="col-md-4 SearchByCat">
            <PriceRangeSlider/>
        </div>
        <div className="col-md-4 Sort mt-3 mt-md-0">
            <ProductSorter/>
        </div>  
    </div>
    <div className="container">
      <div className="row justify-content-around align-items-center">
        
          <ProductsList name={"Our Products"}/>
      </div>
    </div>
    </React.Fragment>
  )
}

export default PGallery