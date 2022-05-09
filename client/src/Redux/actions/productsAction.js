import { featuredProducts, products } from "../Axios/product";




export const getProducts = () => async dispatch =>{

    products.get("/")
    .then(response =>{
        dispatch(getAllProducts(response.data))
    })

}

export const getAllProducts = (products)=>{
    return{
        type: "GET_ALL_PRODUCTS",
        payload: products
    }
}


export const getFeatured = (products)=>{
    return {
        type: "GET_FEATURED_PRODUCTS",
        payload: products
    }
}


export const getFeaturedProducts = () => async dispatch =>{

    featuredProducts.get("/")
    .then(response =>{
        dispatch(getFeatured(response.data))
    })

}