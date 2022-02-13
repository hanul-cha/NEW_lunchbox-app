import {
  ADD_BASKETLIST,
  REMOVE_BASKETLIST,
  BasketReducerPropType,
} from "./BasketActionType";

export const BasketAction = (AddBasketList: BasketReducerPropType[]) => {
  return {
    type:ADD_BASKETLIST,
    payload:AddBasketList
  }
};
export const PutBasketAction = (removeItem: number) => {
  return {
    type:REMOVE_BASKETLIST,
    payload:removeItem
  }
};
