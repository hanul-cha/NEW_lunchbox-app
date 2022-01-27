import { ProductDispatchType, PRODUCT_FAIL, PRODUCT_SUCCESS } from "../actions/ProductActionType"

const initialState = {
    success:false
}

const ProductReducer = (state = initialState, action:ProductDispatchType) => {
    switch (action.type) {
        case PRODUCT_FAIL:
            return{
                ...state,
                success: false
            }
        case PRODUCT_SUCCESS:
            const productLIst = action.payload
            return {
                ...state,
                success: true,
                productLIst
            }
            default: return state;
    }
}

export default ProductReducer