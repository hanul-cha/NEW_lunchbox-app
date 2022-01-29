import { AnyAction, CombinedState, combineReducers } from "redux";
import ProductReducer, { ISuccessState } from "./ProductReducer";
import { HYDRATE } from "next-redux-wrapper"

const rootReducer = (state: IState, action: AnyAction) : CombinedState<IState> => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                ProductReducer
            });
            return combineReducer(state, action)
        }
    }
}

export interface IState {
    ProductReducer: never
}

export default rootReducer