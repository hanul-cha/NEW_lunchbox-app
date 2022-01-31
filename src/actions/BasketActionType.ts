export const ADD_BASKETLIST = "ADD_BASKETLIST";

export interface BasketReducerPropType {
  basket_id?: number;
  product_id?: number;
  order_id?: number;
  quentity?: number;
}

export interface BasketSuccessDispatch {
  type:string;
  payload: BasketReducerPropType[];
}
