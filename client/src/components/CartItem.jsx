import React from 'react'
import { connect } from 'react-redux'
import QuantityChanger from '../components/QuantityChanger'
import { removeItem } from '../Redux/actions'
import Thumb from "./CloudinaryImg/Thumb"

const CartItem = ({cartItem, removeItem}) => {

    
  return (
    <div className="row align-items-center justify-content-between text-center mb-2">
        <div className="col-2 ">
            {/* <img className='img-fluid' style={{borderRadius: "40px", padding: "10px"}} src="https://i.imgur.com/0M7pldG.jpg" alt="img" /> */}
            <Thumb thumb={cartItem.images[0]}/>
        </div>
        <div className="col-2  " >
            <h6 
            style={{textOverflow : "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                {cartItem.title}
            </h6>
        </div>
        <div className="col-2 ">
            <h6 className='fw-bold'>{cartItem.price}$</h6>
        </div>
        <div className="col-2">
            <QuantityChanger/>
        </div>
        <div className="col-2 total">
            <h6 className='fw-bold'>{cartItem.price * cartItem.quantity}$</h6>
        </div>
        <div className="col-1 delete">
            <h5 className='fw-bold' onClick={_=> removeItem(cartItem._id)}><i className="bi bi-trash-fill"></i></h5>
        </div>
    </div>

  )
}



export default connect(null, {removeItem})(CartItem)