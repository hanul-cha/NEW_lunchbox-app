import { AnyAction, CombinedState, combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import BasketReducer from "./BasketReducer";
import UserReducer from "./UserReducer";
import PleasLoginReducer from "./PleasLoginReducer"
import { HYDRATE } from "next-redux-wrapper"

const rootReducer = combineReducers({
    ProductReducer,
    BasketReducer,
    UserReducer,
    PleasLoginReducer
})

export interface IState {
    ProductReducer: never
}

export default rootReducer