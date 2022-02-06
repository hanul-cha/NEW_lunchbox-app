import { PleasLoginActionDispatch, RUNLOGIN } from "../actions/PleasLoginAction";

const initialState = false

const PleasLoginReducer = (
  state: boolean = initialState,
  action: PleasLoginActionDispatch
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
