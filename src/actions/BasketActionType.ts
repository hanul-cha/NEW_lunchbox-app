export const ADD_BASKETLIST = "ADD_BASKETLIST";

export interface BasketReducerPropType {
  basket_id?: number;
  product_id: number;
  order_id?: number;
  quentity: number;
}

export interface ProductSuccessDispatch {
  type: typeof ADD_BASKETLIST;
  payload: {
    payload: BasketReducerPropType;
  };
}
