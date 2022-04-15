import React, { useEffect, useState } from 'react'
import { CartIcon } from './CartIcon';

const ProductCard = ({img, price, name, quantity}) => {
  const [clicked, setClicked] = useState(false)
  const [disabled, setDisabled] = useState(false)
  



  useEffect(()=>{
    (_=>{if(clicked){
        setDisabled(true)
    }})()
    const clickedTime = ()=>{
      if(clicked){
        setClicked(false)
        setDisabled(false)
      }
    }
    (setTimeout(clickedTime,500))

    return ()=>{
      clearTimeout(clickedTime)
    }
  },[clicked])

  const addItem = clicked? "clicked": "";
  return (
    <div className="col-md-4 col-lg-3 ">
      <div className="card p-4">
          <div className="text-center"> <img src={img} width="200"></img> </div>
          <div className="product-details"> <span className="font-weight-bold d-block">$ {price}</span> <span>{name}</span>
              <div className="buttons d-flex flex-row">
                  <CartIcon/>
                  <button type='submit' className={`btn btn-success cart-button ${addItem} btn-block ` } onClick={_=>setClicked(true)} disabled={disabled}><span className="dot">{quantity}</span>Add to cart </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProductCard