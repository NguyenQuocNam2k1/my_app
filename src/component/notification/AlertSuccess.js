import React from "react";
import { Alert } from "antd";

function AlertSuccess(props) {
  return (
    <>
      <Alert
        message='Success'
        description={props.value}
        type='success'
        showIcon
        closable
      />
    </>
  );
}

export default AlertSuccess;
