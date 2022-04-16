import React from 'react'
import "../style/Product.scss"
import PDproductDesc from './PD-productDesc'
import PDProductImgs from './PD-productImgs'
import ShopnowBtn from "./styledComponents/ShopnowBtn"


const Product = () => {
  return (
  
<section id="product">
    <div className="product-container container-lg p-0 p-lg-auto ">
    <div className="row justify-content-around align-items-center">
      <PDProductImgs/>
      <PDproductDesc/>
      </div>
    </div>
  </section>
  )
}

export default Product