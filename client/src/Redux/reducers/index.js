
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import categoryReducer from "./categoryReducer"
import productReducer from "./productReducer"

const rootReducer = combineReducers({
    user: AuthReducer ,
    categories: categoryReducer ,
    products: productReducer
}) 

export default rootReducer;

