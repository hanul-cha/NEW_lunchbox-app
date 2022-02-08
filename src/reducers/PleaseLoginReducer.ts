import { PleaseLoginActionDispatch, RUNLOGIN } from "../actions/PleaseLoginAction";

const initialState = false

const PleasLoginReducer = (
  state: boolean = initialState,
  action: PleaseLoginActionDispatch
) => {
  switch (action.type) {
    case RUNLOGIN:
      return action.payload
    default:
      return state;
  }
};

export default PleasLoginReducer;
