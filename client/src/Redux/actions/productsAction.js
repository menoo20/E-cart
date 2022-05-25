import { featuredProducts, products } from "../Axios/product";




export const getProducts = (category, sort, price, page, limit, productName, isFeatured) => async dispatch =>{
    products.get("/", {
        params: {
            category: category? category._id: "",
            [sort] : sort? sort: "",
            lte: price? price.lte : "",
            gte: price? price.gte : "0",
            page: page? page: 1,
            limit: limit? limit : 6,
            keyword: productName? productName : "",
            isFeatured: isFeatured
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


export const getFeaturedProducts = (isFeatured) => async dispatch =>{

    featuredProducts.get("/", {
        params: {
            isFeatured: isFeatured
        }
    })
    .then(response =>{
        dispatch(getFeatured(response.data))
    })

}