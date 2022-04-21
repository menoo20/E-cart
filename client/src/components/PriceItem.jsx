import React from 'react'

const PriceItem = ({priceKind, price}) => {
  return (
    <div className="row justify-content-between align-items-center pb-2 priceitem">
        <div className="col-9 text-start">
            <h6 className='m-0 fw-bold'>{priceKind}</h6>
        </div>
        <div className= {`col-3 text-end ${priceKind==="TOTAL"? "fw-bold": ""}`} >
            {price}<span className='ps-1 dollar'>$</span>
        </div>
    </div>
  )
}

export default PriceItem