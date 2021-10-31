import React from "react";
import { Result, Button } from "antd";
import { Link , useHistory } from "react-router-dom";
import {logOut} from "../redux/actions/accountAction";
import { useDispatch } from "react-redux";

function ResultSuccess() {
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickLogOut = () =>{
    dispatch(logOut());
    history.push("/logIn");
  }
  return (
    <>
      <Result
        status='success'
        title='THANH TOÁN THÀNH CÔNG ️🎉️🎉️🎉'
        subTitle='Cảm ơn bạn đã mua hàng tại WOW . Rất vui khi được phục vụ 👙'
        style={{ fontWeight: "700" }}
        extra={[
          <Link to='/'>
            <Button type='primary' key='console'>
              Go Back Home
            </Button>
          </Link>,
          <Button key='buy' onClick={()=>onClickLogOut()}>Log Out</Button>,
        ]}
      />
    </>
  );
}

export default ResultSuccess;
