import React, { useState } from 'react'
import PriceItem from './PriceItem'


const CheckoutTotal = () => {
   const [COD, setCOD] = useState(true)
   const [Shipping, setShipping] = useState(true)
   const [Coupon, setCoupon] = useState(true)
   const [onSale, setOnSale] = useState(true)

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
     <PriceItem priceKind="ITEMS TOTAL" price="115"/>
     <CashD/>
     <ShippingFees/>
     <CouponApplied/>
     <SaleDiscount/>
     <hr />
     <PriceItem priceKind="TOTAL" price="125"/>
     <button className='btn btn-success'></button>
    </div>
  )
}

export default CheckoutTotal


