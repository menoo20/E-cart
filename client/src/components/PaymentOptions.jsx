import React from 'react'

const PaymentOptions = () => {
  return (
 <>
    <div class="form-check paymentForm">
        <input class="form-check-input" type="radio" name="payment_Method" id="cod payment1"></input>
        <label class="form-check-label" for="cod payment1">
            <h4 className=''>Cash on Delivery (COD)</h4>
        </label>
        <p className='small fw-bold'>Pay by cash on delivery. COD fees of EGP 5 may apply. Learn more.
           Pay online for contactless deliveries.
        </p>
    </div>
    <div className='form-check paymentForm'>
        <input class="form-check-input" type="radio" name="payment_Method" id="credit payment2"></input>
        <label class="form-check-label" for="credit payment2">
            <h4 className=''>Cart Payment</h4>
        </label>
        <p className='small fw-bold'>
            Pay Cash Now And Enjoy a Faster Delivery Time and A Great Variety Of Offers
        </p>
    </div>
</>
)
}

export default PaymentOptions