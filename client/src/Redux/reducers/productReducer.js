
const initialValue = {
    products: [],
    featuredProducts: []
}

const productReducer = (state=initialValue, action)=>{

    switch (action.type) {
    case "GET_FEATURED_PRODUCTS":
    
        return {
            ...state,
            featuredProducts : [
                ...action.payload
            ]
        }
    case "GET_ALL_PRODUCTS": 
    return {
        ...state,
        products : [
            ...action.payload
        ]
    }
    default:
        return state
}
}

export default productReducer