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

const Cart = () => {
  return (
    <>
    <Announcement/>
    <Navbar/>
    <CartBreadCrumb cat={"Cart"} catDesc="Shop The Way You Like" img="https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <div className="cart container my-5">
        <div className="row ">
            <div className="col-8 border py-3 px-4">
                <CartHead/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <hr />
                <button className='btn '><i className='bi bi-backspace-fill text-primary pe-2'></i> Continue Shopping</button>
            </div>
            <div className="col-4  ">
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

export default Cart