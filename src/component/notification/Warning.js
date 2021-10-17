import React from "react";
import { notification } from "antd";

function Warning(props) {
  const warning = (value) => {
    notification.config({
        top:"8rem"
      });
      notification.warning({
        description: value,
        duration: 2
      });
  };
  return <>{warning(props)}</>;
}

export default Warning;
