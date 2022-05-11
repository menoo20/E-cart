import { featuredProducts, products } from "../Axios/product";




export const getProducts = (category, sort, price) => async dispatch =>{
 
    products.get("/", {
        params: {
            category: category? category._id: "",
            [sort] : sort? sort: "",
            price: price? {lte: price.lte, gte: price.gte } : ""
        },
     })
    .then(response =>{
        dispatch(getAllProducts(response.data))
    })

}

export const getAllProducts = (results)=>{
    return{
        type: "GET_ALL_PRODUCTS",
        payload: results
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