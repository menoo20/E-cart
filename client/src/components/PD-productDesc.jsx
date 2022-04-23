import React from 'react'
import AddToCartBtn from './AddToCartBtn'
import QuantityChanger from './QuantityChanger'

const PDproductDesc = () => {
  return (
    <div className="product-desc pt-4 pt-lg-auto col-lg-6 pe-3 ps-5">
        <div className="desc-text pe-4">
          <small className="company fw-bold text-uppercase">Sneaker Company</small>
          <h4 className="display-6 fw-bold py-3">Fall Limited Edition Sneakers</h4>
          <p className=" pb-3">These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className="clear-fix" style={{clear: "both"}}></div>
          <h4 className="fw-bold d-flex align-items-center mb-3 price justify-content-center justify-content-lg-start">
            $ 125.00 <span className="badge discount ms-3">50%</span></h4>
          <small className="b-discount fw-bold text-decoration-line-through">$ 250.00</small>
          <div className="clear-fix" style={{clear: "both"}}></div>
          <div className="price-quant row ">
            <div className="col-lg-4 pb-3 pb-lg-0">
               <QuantityChanger/>
              </div>
              <div className="col-lg-8 d-grid gap-0 mx-auto  cart-button pt-1 pt-lg-0">
                <AddToCartBtn/>
              </div>
          </div>
          </div>
        </div>

  )
}

export default PDproductDesc