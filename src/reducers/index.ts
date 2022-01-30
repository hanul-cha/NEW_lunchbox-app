import { AnyAction, CombinedState, combineReducers } from "redux";
import ProductReducer, { ISuccessState } from "./ProductReducer";
import { HYDRATE } from "next-redux-wrapper"

const rootReducer = combineReducers({
    ProductReducer
})

export interface IState {
    ProductReducer: never
}

export default rootReducer