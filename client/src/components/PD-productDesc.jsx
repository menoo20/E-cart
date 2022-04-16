import React from 'react'

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
          <h4 className="fw-bold d-flex align-items-center mb-3 price">$ 125.00 <span className="badge discount ms-3">50%</span></h4>
          <small className="b-discount fw-bold text-decoration-line-through">$ 250.00</small>
          <div className="clear-fix" style={{clear: "both"}}></div>
          <div className="price-quant row ">
            <div className="col-lg-4 pb-3 pb-lg-0">
                <div className="quant d-flex flex-row justify-content-between align-items-center px-3 py-3 ">
                  {/* <svg className="minus" width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg> */}
                  <small className="fw-bold">0</small>
                  {/* <svg className="plus" width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg> */}
                </div>
              </div>
              <div className="col-lg-8 d-grid gap-0 mx-auto  cart-button pt-1 pt-lg-0">
                <button className="text-nowrap mx-lg-auto text-center py-3 ">
                  <i className="bi bi-cart3 me-2" width="16"  ></i>
                   Add to cart
                </button>
              </div>
          </div>
          </div>
        </div>

  )
}

export default PDproductDesc