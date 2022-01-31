import { Dispatch } from "redux";
import {
  ADD_BASKETLIST,
  BasketReducerPropType,
  BasketSuccessDispatch,
} from "./BasketActionType";

const BasketAction =
  (AddBasketList: BasketReducerPropType[]) =>
  (dispatch: Dispatch<BasketSuccessDispatch>) => {
    try{
      dispatch({
        type: ADD_BASKETLIST,
        payload: AddBasketList,
      })
    } catch {

    }
      
    
  };

export default BasketAction;
