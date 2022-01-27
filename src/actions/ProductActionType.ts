export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FAIL = "PRODUCT_FAIL";

//액션타입들의 ts검사
export interface ProductType {
  explanation: string;
  img: string;
  name: string;
  new_product: boolean;
  price: number;
  product_id: number;
  product_type: string;
};

//넘겨줄 액션 타입
export interface ProductFailDispatch {
  type: typeof PRODUCT_FAIL;
}

export interface ProductSuccessDispatch {
  type: typeof PRODUCT_SUCCESS;
  payload: {
    productLIst: ProductType[];
  };
}

export type ProductDispatchType = ProductFailDispatch | ProductSuccessDispatch;
