import React from "react";
import {Alert} from "antd";

function AlertError(props) {
  return (
    <>
      <Alert
        message='Error'
        description={props.value}
        type='Error'
        showIcon
        closable
      />
    </>
  );
}

export default AlertError;
