import React from 'react'
import "../style/shop-now.scss";
import ShopnowBtn from './styledComponents/ShopnowBtn';
const ShopNow = () => {
  return (
    <div className=' py-5 shop-now'>
     <div className='px-5 box py-4'>
         <h3 className='pb-3'>Clean food, hassle free from the farm to your home!</h3>
         <p className='pe-4 mb-0'>Let us choose only the freshest most nutritional vegetables,
            herbs and fruit when in season and bring it to you in a box every week.
            Also choose from the best market dairy products and more others <i className="bi bi-magic"></i>....
         </p>
         <div className='text-end'>
            <ShopnowBtn color="btn-success">Shop Now</ShopnowBtn>
         </div>
     </div>
    </div>
  )
}

export default ShopNow