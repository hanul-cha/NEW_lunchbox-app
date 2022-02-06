export const RUNLOGIN = "RUNLOGIN";

export interface PleasLoginActionDispatch {
  type:string;
  payload: boolean;
}

const PleasLoginAction = (pleas:boolean) => {
  return {
    type:RUNLOGIN,
    payload:pleas
  }
};

export default PleasLoginAction;