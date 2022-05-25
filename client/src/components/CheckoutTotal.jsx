import React, { useState } from 'react'
import PriceItem from './PriceItem'


const CheckoutTotal = () => {
   const [COD, setCOD] = useState(true)
   const [Shipping, setShipping] = useState(true)
   const [Coupon, setCoupon] = useState(true)
   const [onSale, setOnSale] = useState(true)
   const [disabled, setDisabled] = useState("disabled")
   
   const CashD = ()=>{
    if(COD){
        return (
          <PriceItem priceKind="COD Fees" price="12"/>
        )
    }
}

const ShippingFees = ()=>{
    if(Shipping){
        return (
        <PriceItem priceKind="SHIPPING Fees" price="5"/>
        )
    }
}

const CouponApplied = ()=>{
    if(Coupon){
        return(
            <PriceItem priceKind="Coupon Disc." price="- 6"/>
        )
    }
} 

const SaleDiscount = ()=>{
    if(Coupon){
        return(
            <PriceItem priceKind="Discount" price="- 12"/>
        )
    }
} 

  return (
    <div className='border rounded px-4 mb-3 py-3'>
     <h2 className='text-primary mb-3'>Order Summary</h2>
     <PriceItem priceKind="ITEMS TOTAL" price="115"/>
     <CashD/>
     <ShippingFees/>
     <CouponApplied/>
     <SaleDiscount/>
     <hr />
     <h2 className='text-primary my-3'>Order Total</h2>
     <PriceItem priceKind="TOTAL" price="125"/>
     <div className='d-grid'>
        <button className='btn btn-warning' disabled={disabled?true: false}>Place Your Order</button>
    </div>
    </div>
  )
}

export default CheckoutTotal


