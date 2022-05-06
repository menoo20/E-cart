

const initialValue = null


const categoryReducer = (state=initialValue, action)=>{

    switch (action.type) {
    case "GET_FEATURED":
    
    return action.payload
 
    default:
        return state
}
}

export default categoryReducer