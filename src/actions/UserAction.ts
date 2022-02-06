import { UserReducerPropType, ADD_NEWUSER } from "./UserActionType";


const UserAction = (newUser:UserReducerPropType) => {
  return {
    type:ADD_NEWUSER,
    payload:newUser
  }
};

export default UserAction;