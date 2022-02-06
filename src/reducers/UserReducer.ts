import { ADD_NEWUSER, UserReducerPropType, UserSuccessDispatch } from "../actions/UserActionType";

interface UserReducerState {
    user:UserReducerPropType|null
}

const initialState: UserReducerState = {
  user: null
};

const UserReducer = (
  state: UserReducerState = initialState,
  action: UserSuccessDispatch
) => {
  switch (action.type) {
    case ADD_NEWUSER:
      return {
        ...state,
        user:action.payload
      };
    default:
      return state;
  }
};

export default UserReducer;
