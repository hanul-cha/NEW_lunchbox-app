import {
  ADD_BASKETLIST,
  REMOVE_BASKETLIST,
  BasketSuccessDispatch,
  BasketReducerPropType,
} from "../actions/BasketActionType";

export interface BasketReducerState {
  basketList: BasketReducerPropType[];
}

const initialState: BasketReducerState = {
  basketList: [],
};

const BasketReducer = (
  state: BasketReducerState = initialState,
  action: BasketSuccessDispatch
) => {
  switch (action.type) {
    case ADD_BASKETLIST:
      if(typeof action.payload !== "number"){
        state.basketList = state.basketList.concat(action.payload);
      }
      return {
        ...state,
      };
    case REMOVE_BASKETLIST:
      const newState = state.basketList.filter(
        (type) => type.order_id !== action.payload
      );
      state.basketList = newState
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default BasketReducer;
