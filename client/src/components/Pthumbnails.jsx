import React from 'react'
import Thumb from './CloudinaryImg/Thumb'

const Pthumbnails = ({img, col, handleBigImage}) => {
  return (
    <div className={`col-${col<7?col: 4} product-thumbnail`}>
        <a className="btn border-0 p-0"  >
            <div  className="img-cover thumb" > 
                <Thumb thumb={img} alt="product-1-thumb" className="img-fluid " ></Thumb>
            </div>
        </a>
    </div>
  )
}

export default Pthumbnails