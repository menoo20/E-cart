import React, { useEffect } from 'react'
import "../style/ProductsList.scss"
import ProductCard from './ProductCard'



const ProductsList = ({name, products}) => {
    
    return (
        <div className="wrapper mb-5">
            <h1 className='py-4 text-center  cart-title'>
               {name}
            </h1>
            <div className="row g-1 justify-content-start">
              {products.map(product=>{
                return (
                  <ProductCard 
                  key={product._id}
                  name= {product.title}
                  price={product.price}
                  quantity={1}
                  unit={product.unit}
                  normalImg={product.images}
                  categories={product.categories}/>
                )
              })
              }
                </div>
        </div>
  )
}

export default ProductsList

