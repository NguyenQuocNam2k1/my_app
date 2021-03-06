import { AccountTypes } from "../contants/action-types";


export const registerAccount = (userName , email , password) => async (dispatch) => {
  dispatch({ type: AccountTypes.REGISTER_ACCOUNT, payload: {userName: userName , userEmail : email , password : password} });
};

export const logIn = (userName, password) => async(dispatch) =>{
  dispatch({type: AccountTypes.LOG_IN , payload:{userName:userName , password:password}})
}

export const logOut = () => async(dispatch) =>{
  dispatch({type: AccountTypes.LOG_OUT})
}

export const restartStatus = () => async(dispatch) =>{
  dispatch({type: AccountTypes.RESTART_STATUS})
}



