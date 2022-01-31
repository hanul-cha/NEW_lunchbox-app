import { ADD_BASKETLIST, BasketReducerPropType } from "./BasketActionType"

const BasketAction = (AddBasketList:BasketReducerPropType) => {
  return {
    type: ADD_BASKETLIST,
    payload: AddBasketList,
  };
};

export default BasketAction;
