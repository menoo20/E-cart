

const initialValue = {
    categories: [],
    featuredCategories: []
}


const categoryReducer = (state=initialValue, action)=>{

    switch (action.type) {
    case "GET_FEATURED":
    
    return {
        ...state,
        featuredCategories : [
            ...action.payload
        ]
    }
    
    case "GET_ALL_CATS":
    return {
        ...state,
        categories : [
            ...action.payload
        ]
    }
 
    default:
        return state
}
}

export default categoryReducer