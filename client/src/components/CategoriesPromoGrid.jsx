import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import "../style/CategoriesPromoGrid.scss"
import ShopnowBtn from './styledComponents/ShopnowBtn'
import { Link } from 'react-router-dom'

const CategoriesPromoGrid = ({featuredCategories  }) => {


  
  return (
    <>
    <h1 className='py-4 text-center  cart-title'>
        Featured Galleries
    </h1>
    <div className="row justify-content-center align-items-center">
         
          <div className="col-12 col-md-6 text-center category p-0">
            <div className="overlay d-flex flex-column justify-content-center align-items-center">
              <h1><span>FRESH</span><br/>{featuredCategories? featuredCategories[1].name.toUpperCase(): ""}</h1>
              <ShopnowBtn color="btn-primary">Shop Now</ShopnowBtn>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center category p-0">
            <div className="overlay d-flex flex-column justify-content-center align-items-center">
              <h1><span>FRESH</span><br/>{featuredCategories? featuredCategories[2].name.toUpperCase(): ""}</h1>
              <ShopnowBtn color="btn-primary">Shop Now</ShopnowBtn>
            </div>
          </div>
          <div className="col-12 col-md-12 text-center category p-0">
            <div className="overlay d-flex justify-content-center flex-column align-items-center">
                <h1><span>FRESH</span><br/>{featuredCategories? featuredCategories[0].name.toUpperCase(): ""}</h1>
                <ShopnowBtn color="btn-primary">Shop Now</ShopnowBtn>
            </div>
          </div>
      </div>
    </>
  )
}

function mapStateToProps({categories}){
  console.log(categories.featuredCategories)
  return{
    featuredCategories: categories.featuredCategories? categories.featuredCategories : ""
  }

}

export default connect(mapStateToProps)(CategoriesPromoGrid) 