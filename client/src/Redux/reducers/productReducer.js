
const initialValue = {
    totalPages: "",
    totalDocuments: "",
    nextPage: "",
    previousPage: "",
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
        totalPages: action.payload.totalPages,
        totalDocuments: action.payload.totalDocuments,
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage,
        products : [
            ...action.payload.results
            
        ]
    }
    default:
        return state
}
}

export default productReducer