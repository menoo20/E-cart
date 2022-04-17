import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Product from '../components/Product'
import vegImg from "../images/vegShop.jpg";


 const ProductDetails = () => {

  return (
    <React.Fragment>
        <BreadCrumb img={vegImg} cat={"Vegetable’s"} catDesc={"Best and Freshest Vegs between Your Hand"}/>
        <Product/>
    </React.Fragment>
  )
}

export default ProductDetails;