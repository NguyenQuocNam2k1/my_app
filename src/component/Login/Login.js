import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/accountAction";
import Success from "../notification/Success";
import Error from "../notification/Error";



function Login() {
  const [nameOrEmail, setNameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const onChangeData = (event) => {
    event.target.name === "name"
    ? setNameOrEmail(event.target.value)
    : setPassword(event.target.value);
  };
  
  const onClickLogin = async (e) => {
    e.preventDefault();
    dispatch(logIn(nameOrEmail, password));
    const {status} = JSON.parse(localStorage.getItem("statusLogin"));
    setTimeout(() =>{
        return status  ? Success("Sing In Success 😜😜😜") : Error("Your account information, password is incorrect 😭😭😭");
    },[300]);
  };

  return (
    <>
      <div className='login-box'>
        <form>
          <div className='user-box'>
            <input
              type='text'
              name='name'
              required
              onChange={(event) => onChangeData(event)}
            />
            <label>USERNAME OR EMAIL ADDRESS *</label>
          </div>
          <div className='user-box'>
            <input
              type='password'
              name='password'
              required
              onChange={(event) => onChangeData(event)}
            />
            <label>PASSWORD *</label>
          </div>
          <button class='button_login' onClick={(e) => onClickLogin(e)}>
            LOG IN
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
