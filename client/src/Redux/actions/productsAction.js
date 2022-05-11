import { featuredProducts, products } from "../Axios/product";




export const getProducts = (category, sort, price) => async dispatch =>{
    console.log(price)
    products.get("/", {
        params: {
            category: category? category._id: "",
            [sort] : sort? sort: "",
            lte: price? price.lte : "",
            gte: price? price.gte : ""
        },
     })
    .then(response =>{
        console.log(response.date)
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