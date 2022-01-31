import {
  ADD_BASKETLIST,
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
      const addState = state.basketList.concat();
      return {
        ...addState,
      };
  }
};

export default BasketReducer;
