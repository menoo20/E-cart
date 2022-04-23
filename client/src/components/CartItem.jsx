import React from 'react'
import QuantityChanger from '../components/QuantityChanger'

const CartItem = () => {
  return (
        
    <div className="row align-items-center justify-content-between text-center mb-2">
        <div className="col-2 ">
            <img className='img-fluid' style={{borderRadius: "40px", padding: "10px"}} src="https://i.imgur.com/0M7pldG.jpg" alt="img" />
        </div>
        <div className="col-2  " >
            <h6>Cold Cucumbers</h6>
        </div>
        <div className="col-2 ">
            <h6 className='fw-bold'>4.60$</h6>
        </div>
        <div className="col-2">
            <QuantityChanger/>
        </div>
        <div className="col-2">
            <h6 className='fw-bold'>8.60$</h6>
        </div>
        <div className="col-1 delete">
            <h5 className='fw-bold'><i class="bi bi-trash-fill"></i></h5>
        </div>
    </div>

  )
}

export default CartItem