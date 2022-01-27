import { Dispatch } from "redux";
import {
  ProductDispatchType,
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
} from "./ProductActionType";

export const fetchProductData =
  () => async (dispatch: Dispatch<ProductDispatchType>) => {
    try {
      const allproduction = await (
        await fetch("http://localhost:3000/api/product")
      ).json();

      dispatch({
        type: PRODUCT_SUCCESS,
        payload: allproduction,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_FAIL,
      });
    }
  };
