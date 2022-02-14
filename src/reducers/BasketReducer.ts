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
      console.log(state.basketList)
      console.log(action.payload)
      const newState = state.basketList.filter(
        (type,index) => index !== action.payload
      );
      console.log(newState)
      state.basketList = newState
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default BasketReducer;
