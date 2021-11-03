import React from "react";
import { Result, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../redux/actions/accountAction";
import { useDispatch } from "react-redux";

function ResultSuccess() {
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickLogOut = (name) => {
    // console.log(name.textContent);
    if (name.textContent === "Go Back Home") {
      localStorage.setItem("ordersClient", JSON.stringify([]));
      history.push("/");
    } else if (name.textContent === "Log Out") {
      dispatch(logOut());
      history.push("/logIn");
    }
  };
  return (
    <>
      <Result
        status='success'
        title='THANH TOÁN THÀNH CÔNG ️🎉️🎉️🎉'
        subTitle='Cảm ơn bạn đã mua hàng tại WOW . Rất vui khi được phục vụ 👙'
        style={{ fontWeight: "700" }}
        extra={[
          <Button
            type='primary'
            name='Return'
            key='console'
            onClick={(e) => onClickLogOut(e.target)}
            style={{marginBottom: "3rem"}}
          >
            Go Back Home
          </Button>,
          <Button
            key='buy'
            name='log_out'
            onClick={(e) => onClickLogOut(e.target)}
            style={{marginBottom: "3rem"}}
          >
            Log Out
          </Button>,
        ]}
      />
    </>
  );
}

export default ResultSuccess;
