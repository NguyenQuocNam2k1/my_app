import React from "react";
import { notification } from "antd";

function Error(props) {
  const error = (value) => {
    notification.config({
      top:"8rem"
    });
    notification.error({
      description: value,
      duration: 2
    });
  };
  return <>{error(props)}</>;
}

export default Error;
