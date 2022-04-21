import React from 'react'

const CartHead = () => {
  return (
    <div className="row align-items-center justify-content-between text-center mb-0">
        <div className="col-2 ">
            <h5 className='fw-bold'>Product</h5>
        </div>
        <div className="col-2  " >
            <h5 className='fw-bold'>Name</h5>
        </div>
        <div className="col-2 ">
            <h5 className='fw-bold'>Price</h5>
        </div>
        <div className="col-2">
            <h5 className='fw-bold'>Qty.</h5>
        </div>
        <div className="col-2">
            <h5 className='fw-bold'>Total</h5>
        </div>
        <div className="col-1">
        </div>
    </div>
  )
}

export default CartHead