import { AccountTypes } from "../contants/action-types";


const initialState = {
  account: [{ userName: "Admin", password: "admin100" }],
  singIn: 2,
  StatusRegister:2
};

export const accountUser = (state = initialState, { type, payload }) => {
  localStorage.setItem("usersAccount" , JSON.stringify(state.account))
  switch (type) {
    case AccountTypes.LOG_IN:
      const name = payload.userName;
      const password = payload.password;
      let statusSingIn = ""; 
      const userAccount = JSON.parse(localStorage.getItem('usersAccount'));
      userAccount.forEach((account) => {
        if(name === account.userName && password === account.password){
            statusSingIn = 1
        } else{
            statusSingIn = 0
        }
      });
      return { ...state, singIn: statusSingIn , account: userAccount };
    case AccountTypes.REGISTER_ACCOUNT:
      state.account.push(payload);
      localStorage.setItem('usersAccount', JSON.stringify(state.account));
      return{...state , StatusRegister: 1}
    case AccountTypes.RESTART_STATUS:
      return{...state , singIn: 2 , StatusRegister: 0}
    default:
      return state;
  }
};
