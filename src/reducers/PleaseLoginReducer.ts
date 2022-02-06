import { PleaseLoginActionDispatch, RUNLOGIN } from "../actions/PleasLoginAction";

const initialState = false

const PleasLoginReducer = (
  state: boolean = initialState,
  action: PleaseLoginActionDispatch
) => {
  switch (action.type) {
    case RUNLOGIN:
      return {
        state:action.payload
      };
    default:
      return state;
  }
};

export default PleasLoginReducer;
