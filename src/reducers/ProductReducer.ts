import {
  ProductDispatchType,
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
  ProductType,
} from "../actions/ProductActionType";

export interface ISuccessState {
  success: boolean;
  productLIst?: ProductType[];
}

const initialState: ISuccessState = {
  success: false,
};

const ProductReducer = (
  state: ISuccessState = initialState,
  action: ProductDispatchType
) => {
  switch (action.type) {
    case PRODUCT_FAIL:
      return {
        ...state,
        success: false,
      };
    case PRODUCT_SUCCESS:
      const productLIst = action.payload;
      return {
        ...state,
        success: true,
        productLIst,
      };
    default:
      return state;
  }
};

export default ProductReducer;
