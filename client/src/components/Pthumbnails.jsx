import React from 'react'

const Pthumbnails = ({img, active}) => {
  return (
    <div className="col-3 product-thumbnail">
        <a className="btn border-0 p-0"  >
            <div  className="img-cover thumb" > 
                <img src={img} alt="product-1-thumb" className="img-fluid "></img>
            </div>
        </a>
    </div>
  )
}

export default Pthumbnails