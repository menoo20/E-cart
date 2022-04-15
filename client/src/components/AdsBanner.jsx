import React from 'react'
import banner1 from "../images/banner-1.jpg"
import banner2 from "../images/banner-2.jpg"

const AdsBanner = () => {
  return (
    <div className='row justify-content-between my-5'>
        <div className="col-6 banner1">
            <img src={banner1} alt="banner" />
        </div>
        <div className="col-6 banner2">
            <img src={banner2} alt="banner" />
        </div>
    </div>
  )
}

export default AdsBanner