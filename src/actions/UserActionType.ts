export const ADD_NEWUSER = "ADD_NEWUSER";

export interface UserReducerPropType {
  user_id?: string;
  name?: string;
  password?:string;
  address?:string|null;
}

export interface UserSuccessDispatch {
  type:string;
  payload: UserReducerPropType;
}
