
const initialValue = {
    products: { },
}


const cartReducer = (state=initialValue, action)=>{

    switch (action.type) {
    case "ADD_PRODUCTS":
    
    return {
        ...state,
        products: {
            ...state.products,
            [action.payload.productId]: {
                ...action.payload.product,
                quantity: action.payload.quantity
            }
        }
        
    }
    case "REMOVE_ITEM":
        let filteredstate = {}
        let key = action.payload
        const keys = state.products? Object.keys(state.products) : null;
        {keys.length?keys.forEach(k=>{
                if(k != key ){
                  filteredstate = {
                   ...filteredstate,
                  products: {
                    ...filteredstate.products,
                    [k]: {
                      ...state.products[k]
                    }
                  } 
                  }
                }
              })
        :null}
        return filteredstate? filteredstate: null
    case "EMPTY_CART":
    return initialValue

    default:
        return state
}
}

export default cartReducer