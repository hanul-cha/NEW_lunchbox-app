import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import { HYDRATE } from "next-redux-wrapper"

const rootReducer = combineReducers({
    
    ProductReducer
})

export default rootReducer