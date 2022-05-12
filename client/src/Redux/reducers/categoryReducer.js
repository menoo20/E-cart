
const initialValue = {
    categories: [],
    featuredCategories: [],
    category: {
        id: "",
        name:""
    },
    sort: "Most Popular",
    price: {lte: 0, gte: 50},
    page: 1,
    limit: 6
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

    case "CHOOSEN_CAT":
    return {
        ...state,
        category : action.payload
    }

    case "CHOOSE_SORT":
    return {
        ...state,
        sort: action.payload
    }
    case "CHOOSE_PRICE_RANGE":
    return {
        ...state,
        price: action.payload
    } 

    case "CHOOSE_PAGE_OR_LIMIT":
    return {
        ...state,
        ...action.payload
    }
 
    default:
        return state
}
}

export default categoryReducer