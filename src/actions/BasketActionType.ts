export const ADD_BASKETLIST = "ADD_BASKETLIST";
export const REMOVE_BASKETLIST = "REMOVE_BASKETLIST";

export interface BasketReducerPropType {
  basket_id?: number|null;
  product_id?: number;
  order_id?: number|null;
  quentity?: number;
  price?:number;
  random:number;
}

export interface BasketSuccessDispatch {
  type:string;
  payload: BasketReducerPropType[]|number;
}

