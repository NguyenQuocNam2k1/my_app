import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/accountAction";
import Success from "../notification/Success";
import { useHistory } from "react-router-dom";
import Error from "../notification/Error";

function Login() {
  const [nameOrEmail, setNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const onChangeData = (event) => {
    event.target.name === "name"
      ? setNameOrEmail(event.target.value)
      : setPassword(event.target.value);
  };

  const onClickLogin = async (e) => {
    e.preventDefault();
    if (nameOrEmail === "Admin" && password === "Admin123") {
      let status_Login = JSON.parse(localStorage.getItem("statusLogin"));
      status_Login.status = false;
      delete status_Login["status"];
      localStorage.setItem("statusLogin", JSON.stringify(status_Login));
      history.push("/admin");
    } else if (nameOrEmail || password) {
      dispatch(logIn(nameOrEmail, password));
      setTimeout(() => {
        const { status } = JSON.parse(localStorage.getItem("statusLogin"));
        return status
          ? history.push("/")
          : Error("Your account information, password is incorrect 😭😭😭");
      }, [300]);
    }
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
