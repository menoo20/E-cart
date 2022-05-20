import React, { useEffect, useState } from 'react'
import { CartIcon } from './CartIcon';
import NormalImg from './CloudinaryImg/NormalImg';
import { Link } from 'react-router-dom';
const ProductCard = ({normalImg, price, name, quantity, unit, id}) => {
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
      <div className="card p-4 pb-2">
          <Link to={`/product/${id}`}>
            <div className="text-center">
                <NormalImg normalImg={normalImg[0]} width="200"/>
            </div>
          </Link>  
   
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