import React from 'react'

const CheckoutTotalCoupon = () => {
  return (
    <div className='border rounded px-4 mb-3'>
      <div className="form  py-3 ">
        <label htmlFor="floatingInput" className='pb-3 fw-bold'>Have Coupon?</label>
        <div className="input-group mb-3">
          <input type="text " className="form-control" id="floatingInput" placeholder="E_CART 123"></input>
          <button className="btn btn-primary" type="button" id="button-addon1">Apply</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutTotalCoupon