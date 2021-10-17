import { AccountTypes } from "../contants/action-types";


const initialState = {
  account: [],
  singIn: 2,
  StatusRegister:2,
};

export const accountUser = (state = initialState, { type, payload }) => {
  // localStorage.setItem("usersAccount" , JSON.stringify(state.account))
  // localStorage.setItem("statusLogin" , JSON.stringify({}))
  switch (type) {
    case AccountTypes.LOG_IN:
      const name = payload.userName;
      const password = payload.password;
      let usersAccount = JSON.parse(localStorage.getItem('usersAccount'));
      let status_Login = JSON.parse(localStorage.getItem("statusLogin"));
      usersAccount.forEach((account) => {
        if((name === account.userName || name === account.userEmail) && password === account.password){
          status_Login.idUser = account.id;
          status_Login.status = true;
        } else{
          status_Login.status = false;
          delete status_Login["status"];
        }
      });
      localStorage.setItem('statusLogin', JSON.stringify(status_Login));
      return { ...state};
    case AccountTypes.REGISTER_ACCOUNT:
      state.account = JSON.parse(localStorage.getItem('usersAccount'));
      state.account.push(payload);
      state.account[state.account.length - 1].id = state.account.length;
      localStorage.setItem('usersAccount', JSON.stringify(state.account));
      return{...state , StatusRegister: 1}
    case AccountTypes.RESTART_STATUS:
      return{...state , singIn: 2 , StatusRegister: 0}
    default:
      return state;
  }
};
