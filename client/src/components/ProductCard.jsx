import React, { useEffect, useState } from 'react'
import { CartIcon } from './CartIcon';
import NormalImg from './CloudinaryImg/NormalImg';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { addProductsToCart } from '../Redux/actions';
import {toast} from "react-toastify"


const ProductCard = ({normalImg, product, addProductsToCart, productIsInCart}) => {
  const [clicked, setClicked] = useState(false)
  const [disabled, setDisabled] = useState(false)
  
// this useEffect is used to delay the request to add a product to the cart
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

  //responsible for the change in the click state for the button
  const addItem = clicked? "clicked": "";


  //handle adding a new product to the cart
  const handleAdd = (e)=>{
    e.preventDefault()
    setClicked(true);
    if(productIsInCart){
      console.log("the product does exists");
      const repeated = ()=>  toast.warning(`You already added this product`)
      repeated();
    }else{
      addProductsToCart(product, product._id, 1);
      const successify = ()=>  toast.success(`Added To Cart`)
      successify();
    }
  }


  return (
    <div className="col-md-4 col-lg-3 ">
      <div className="card p-4 pb-2">
          <Link to={`/product/${product._id}`}>
            <div className="text-center">
                <NormalImg normalImg={normalImg[0]} width="200"/>
            </div>
          </Link>  
   
          <div className="product-details"> <span className="font-weight-bold d-block">$ {product.price}</span> <span>{product.name}</span>
              <div className="buttons d-flex flex-row">
                  <CartIcon/>
                  <button type='submit' className={`btn btn-success cart-button ${addItem} btn-block ` } onClick={e=>handleAdd(e)} disabled={disabled == true? true : false}><span className="dot">quantity</span>Add to cart</button>
              </div>
          </div>
      </div>
    </div>
  )

  }

const mapStateToProps =({cart}, {product})=>{
  
  const cartItems =Object.keys(cart.products);
  const productIsInCart = cartItems.includes(product._id)? true: false;
  return {
    productIsInCart
 }
}  
export default connect(mapStateToProps,{addProductsToCart})(ProductCard)