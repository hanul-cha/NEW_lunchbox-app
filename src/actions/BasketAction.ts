import { Dispatch } from "redux";
import {
  ADD_BASKETLIST,
  BasketReducerPropType,
  BasketSuccessDispatch,
} from "./BasketActionType";

const BasketAction = (AddBasketList: BasketReducerPropType[]) => {
  return {
    type:ADD_BASKETLIST,
    payload:AddBasketList
  }
};

export default BasketAction;
