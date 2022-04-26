import React from 'react'
import Announcement from '../components/Announcement';
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from '../components/Product'
import vegImg from "../images/vegShop.jpg";


 const ProductDetails = () => {

  return (
    <React.Fragment>
      <Announcement/>
      <Navbar/>
        <BreadCrumb img={vegImg} cat={"Vegetable’s"} catDesc={"Best and Freshest Vegs between Your Hand"}/>
        <Product/>
      <Footer/>
    </React.Fragment>
  )
}

export default ProductDetails;