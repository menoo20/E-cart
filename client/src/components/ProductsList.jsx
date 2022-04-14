import React, { useEffect } from 'react'
import "../style/ProductsList.scss"
import ProductCard from './ProductCard'

const productProps = {
    product1: {
        img: "https://i.imgur.com/w2rCsEw.jpg",
        price:  7.00,
        name: "Red Redish",
        quantity: 1
    }
}

const CategoriesList = (props) => {

    return (
        <div class="wrapper mb-5">
        <div class="container">
            <div class="row g-1">
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
        </div>
  )
}

export default CategoriesList


// const cartButtons = document.querySelectorAll('.cart-button');

// cartButtons.forEach(button => {

// button.addEventListener('click',cartClick);

// });

// function cartClick(){
// let button =this;
// button.classList.add('clicked');
// }



// });