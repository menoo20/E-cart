import React from 'react'
import { connect } from 'react-redux'
import { category } from '../Redux/Axios/category'
import AddToCartBtn from './AddToCartBtn'
import QuantityChanger from './QuantityChanger'

const PDproductDesc = ({id, product, category}) => {

  return (
    <div className="product-desc pt-4 pt-lg-auto col-lg-6 pe-3 ps-5">
        <div className="desc-text pe-4">
          <small className="company fw-bold text-uppercase">{category} category</small>
          <h4 className="display-6 fw-bold py-3">{product.title}</h4>
          <p className=" pb-3">{product.desc}
          </p>
          <div className="clear-fix" style={{clear: "both"}}></div>
          <h4 className="fw-bold d-flex align-items-center mb-3 price justify-content-center justify-content-lg-start">
            $ {product.price} <span className="badge discount ms-3">50%</span></h4>
          <small className="b-discount fw-bold text-decoration-line-through">$ 15.00</small>
          <div className="clear-fix" style={{clear: "both"}}></div>
          <div className="price-quant row ">
            <div className="col-lg-4 pb-3 pb-lg-0">
               <QuantityChanger/>
              </div>
              <div className="col-lg-8 d-grid gap-0 mx-auto  cart-button pt-1 pt-lg-0">
                <AddToCartBtn/>
              </div>
          </div>
          </div>
        </div>

  )
}

const mapStateToProps = ({products, categories}, {id})=>{
  console.log(products);
  const product =  products.products.length > 1? 
  products.products.filter(product => product._id == id):
  products.featuredProducts.filter(product => product._id == id);
  const category = categories.categories.length? categories.categories.filter(category => category._id == product[0].categories[0]): "";
  return{
    product: product[0],
    category: category[0].name
  }
}

export default connect(mapStateToProps)(PDproductDesc)