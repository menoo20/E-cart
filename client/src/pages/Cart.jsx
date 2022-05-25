import React from 'react'
import CartBreadCrumb from '../components/CartBreadCrumb'
import CartItem from '../components/CartItem'
import "../style/Cart.scss"
import CartHead from '../components/CartHead'
import CheckoutTotalCoupon from '../components/CheckoutTotalCoupon'
import CheckoutTotal from '../components/CheckoutTotal'
import PaymentMethods from '../components/PaymentMethods'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

const Cart = ({cartItems}) => {


  return (
    <>
    <Announcement/>
    <Navbar/>
    <CartBreadCrumb cat={"Cart"} catDesc="Shop The Way You Like" img="https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <div className="cart container my-5">
        <h1 className='text-center pb-5'>Cart <span>Items</span></h1>
        <div className="row ">
            <div className="col-lg-8 border py-3 px-4">
                <CartHead/>
                {cartItems.length>=1? cartItems.map(cartItem=>{
                 return  <CartItem key={cartItem._id} cartItem={cartItem}/>
                }):
                 ""
                }
                <hr />
                <button className='btn '><i className='bi bi-backspace-fill text-primary pe-2'></i> Continue Shopping</button>
            </div>
            <div className="col-lg-4 px-0 px-lg-3 mt-lg-0 mt-3 ">
                <CheckoutTotalCoupon/>
                <CheckoutTotal/>
           </div>
        </div>
        <PaymentMethods/>
    </div>
    <Footer/>
    </>
  )
}

function mapStateToProps({cart}){
  
  const cartItems = cart !== null? Object.values(cart.products): null
  console.log(cartItems.length);
  return {
    cartItems
  }
}

export default connect(mapStateToProps,{})(Cart)