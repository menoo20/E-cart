
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import categoryReducer from "./categoryReducer"

const rootReducer = combineReducers({
    user: AuthReducer ,
    categories: categoryReducer
}) 

export default rootReducer;

