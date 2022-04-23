import React from 'react'
import "../style/CategoriesPromoGrid.scss"
import ShopnowBtn from './styledComponents/ShopnowBtn'

const CategoriesPromoGrid = () => {
  return (
     <div className="row justify-content-between align-items-center">
         <div className="col-9 col-md-6 text-center category p-0">
               <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <h1><span>FRESH</span><br/>VEGETABLES</h1>
                <ShopnowBtn color="btn-primary">Shop Now</ShopnowBtn>
                </div>
         </div>
         <div className="col-9 col-md-6 text-center category p-0">
            <div className="overlay d-flex justify-content-center flex-column align-items-center">
                <h1><span>FRESH</span><br/>FRUITS</h1>
                <ShopnowBtn color="btn-primary">Shop Now</ShopnowBtn>
            </div>
         </div>
         <div className="col-9 col-md-12 text-center category p-0">
            <div className="overlay d-flex justify-content-center flex-column align-items-center">
                <h1><span>FRESH</span><br/>BREAD</h1>
                <ShopnowBtn color="btn-primary">Shop Now</ShopnowBtn>
            </div>
         </div>

     </div>
  )
}

export default CategoriesPromoGrid