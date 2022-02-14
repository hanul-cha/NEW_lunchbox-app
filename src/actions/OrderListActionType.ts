export const PATCHORDERLIST = "PATCHORDERLIST";

export interface OrderListActionTypePropType {
    explanation: string;
    img: string;
    name: string;
    new_product: boolean;
    price: number;
    product_id: number;
    product_type: string;
}

export interface OrderListActionTypeDispatch {
  type:string;
  payload: OrderListActionTypePropType[];
}

