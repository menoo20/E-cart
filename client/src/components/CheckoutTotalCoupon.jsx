import React from 'react'

const CheckoutTotalCoupon = () => {
  return (
    <div className='border rounded px-4 mb-3'>
      <div class="form  py-3 ">
        <label htmlFor="floatingInput" className='pb-3 fw-bold'>Have Coupon?</label>
        <div class="input-group mb-3">
          <input type="text " class="form-control" id="floatingInput" placeholder="E_CART 123"></input>
          <button class="btn btn-primary" type="button" id="button-addon1">Apply</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutTotalCoupon