
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer"
import productReducer from "./productReducer"

const rootReducer = combineReducers({
    user: AuthReducer ,
    categories: categoryReducer ,
    products: productReducer,
    cart: cartReducer
}) 

export default rootReducer;

