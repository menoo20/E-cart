import React, { useEffect } from 'react'
import "../style/ProductsList.scss"
import ProductCard from './ProductCard'



const ProductsList = ({name}) => {

    return (
        <div className="wrapper mb-5">
            <h1 className='py-4 text-center  cat-title'>
               {name}
            </h1>
            <div className="row g-1 justify-content-between">

                <ProductCard 
                  name="Red Redish"
                  price={"7.00"}
                  quantity={1}
                  img="https://i.imgur.com/w2rCsEw.jpg"/>
                <ProductCard 
                  name="Red Redish"
                  price={"7.00"}
                  quantity={1}
                  img="https://i.imgur.com/ZRUetRF.jpg"/>
                <ProductCard 
                    name="Red Redish"
                    price={"7.00"}
                    quantity={1}
                    img="https://i.imgur.com/0M7pldG.jpg"/>
                <ProductCard 
                    name="Red Redish"
                    price={"7.00"}
                    quantity={1}
                    img="https://i.imgur.com/emb60L5.jpg"/>
                     <ProductCard 
                  name="Red Redish"
                  price={"7.00"}
                  quantity={1}
                  img="https://i.imgur.com/w2rCsEw.jpg"/>
                <ProductCard 
                  name="Red Redish"
                  price={"7.00"}
                  quantity={1}
                  img="https://i.imgur.com/ZRUetRF.jpg"/>
                <ProductCard 
                    name="Red Redish"
                    price={"7.00"}
                    quantity={1}
                    img="https://i.imgur.com/0M7pldG.jpg"/>
                <ProductCard 
                    name="Red Redish"
                    price={"7.00"}
                    quantity={1}
                    img="https://i.imgur.com/emb60L5.jpg"/>
                </div>
        </div>
  )
}

export default ProductsList

