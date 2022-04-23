import React from 'react'
import PaymentOptions from './PaymentOptions'

const PaymentMethods = () => {
  return (
    <div className="row mt-3">
        <div className="col-8 accordion px-0" id="Payment">
            <div className="accordion-item">
                <h2 className="accordion-header" id="selectPayment">
                <button className="accordion-button title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Payment Method
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="selectPayment" data-bs-parent="#Payment">
                    <div className="accordion-body">
                           <PaymentOptions/>
                    </div>
                </div>
            </div>
        <div className="col-4">

        </div>
        </div>
    </div>
  )
}

export default PaymentMethods