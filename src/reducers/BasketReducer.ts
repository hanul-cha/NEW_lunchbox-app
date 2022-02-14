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

/* 
조건문이 이상하지는 않은거 같은데 빠르게 눌렀을때 오류 나오는걸로 봐선
비동기 문제지 않을까 싶다
가끔 이상한 값이 들어옴
순서대로 안들어와서 생기는문제 하나더 있음
총 가격도 문제가 있음
제일 베스트는 순서대로 만드는게 제일 베스트야
*/
