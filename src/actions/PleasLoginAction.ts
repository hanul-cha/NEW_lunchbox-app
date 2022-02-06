export const RUNLOGIN = "RUNLOGIN";

export interface PleaseLoginActionDispatch {
  type:string;
  payload: boolean;
}

const PleaseLoginAction = (please:boolean) => {
  return {
    type:RUNLOGIN,
    payload:please
  }
};

export default PleaseLoginAction;