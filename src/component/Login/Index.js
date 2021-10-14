import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Breadcrumb } from "antd";
import { restartStatus } from "../../redux/actions/accountAction";
import { useDispatch } from "react-redux";
import "./login.css";

function Index() {
  const [colorTextChild, setColorTextChild] = useState(true);
  const dispatch = useDispatch()
  const change_color_text_false = () => {
    setColorTextChild(false);
    dispatch(restartStatus());

  };
  const change_color_text_true = () => {
    setColorTextChild(true);
    dispatch(restartStatus());
  };
  const showFrom = () =>{
    return (colorTextChild ? <Login /> : <Register />)
  }
  return (
    <>
      <Breadcrumb separator='>' className='title_page'>
        <Breadcrumb.Item> Home </Breadcrumb.Item>
        <Breadcrumb.Item> My Account </Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='title_account'> My Account </h1>
      <div className='title_account_child'>
        <p
          className={colorTextChild ? "text_onclick" : "text"}
          onClick={() => change_color_text_true()}
        >
          Login
        </p>
        <p style={{ margin: "0 0.5rem", color: "#bfcdd0" }}> /</p>
        <p
          className={!colorTextChild? "text_onclick" : "text"}
          onClick={() => change_color_text_false()}
        >
          Register
        </p>
      </div>
      {showFrom()}
    </>
  );
}

export default Index;
