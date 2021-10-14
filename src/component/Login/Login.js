import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/accountAction";
import Success from "../notification/Success";
import Error from "../notification/Error";

function Login() {
  const [nameOrEmail, setNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  // Biến này dùng để check case mà thằng singIn không thay đổi thì nó vẫn sẽ gọi
  //thằng useEffect để reder ra message
  const [statusSingIn, setStatusSingIn] = useState(false);

  const dispatch = useDispatch();
  const singIn = useSelector((state) => state.accounts.singIn);
  const onChangeData = (event) => {
    event.target.name === "name"
      ? setNameOrEmail(event.target.value)
      : setPassword(event.target.value);
  };

  useEffect(() => {
    setTimeout(() =>{
      if (singIn === 1 || singIn === 0) {
        return singIn === 1 ? Success("Sing In Success 😜😜😜") : Error("Your account information, password is incorrect 😭😭😭");
      }
    },[300])
  }, [singIn || statusSingIn]);
  
  const onClickLogin = async (e) => {
    e.preventDefault();
    dispatch(logIn(nameOrEmail, password));
    setStatusSingIn(!statusSingIn)
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
