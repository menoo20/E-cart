import React, { useState } from 'react'

const PaymentOptions = () => {
  const [selected, setSelected] = useState("")
  const handleSubmit=(e)=>{
      e.preventDefault();
  }
  return (
 <form onSubmit={e=>handleSubmit(e)}>
    <div className={`form-check paymentForm  p-3 m-3 ${selected==="cod"? "active": ""}`}>
        <input className="form-check-input " type="radio" name="payment_Method" id="cod payment1" onChange={e=>setSelected(e.target.value)} value="cod"></input>
        <label className="form-check-label" htmlFor="cod payment1">
            <h4 className=''>Cash on Delivery (COD)</h4>
        </label>
        <p className='small fw-bold'>Pay by cash on delivery. COD fees may apply. <a href="#">Learn more</a>.
           <br/>Pay online for contactless deliveries.
        </p>
    </div>
    <div className={`form-check paymentForm  p-3 m-3 ${selected==="credit"? "active": ""}`}>
        <input className="form-check-input" type="radio" name="payment_Method" id="credit payment2" onChange={e=>setSelected(e.target.value)} value="credit"></input>
        <label className="form-check-label" htmlFor="credit payment2">
            <h4 className=''>Cart Payment</h4>
        </label>
        <p className='small fw-bold'>
            Pay Cash Now And Enjoy a Faster Delivery Time and A Great Variety Of Offers
        </p>
    </div>
    <button className='btn btn-warning payment-btn  m-3'>Use This Payment Method</button>
</form>
)
}

export default PaymentOptions