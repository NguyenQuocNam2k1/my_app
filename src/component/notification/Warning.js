import React from "react";
import { notification } from "antd";

function Warning() {
  const warning = (value) => {
    notification.config({
        top:"8rem"
      });
      notification.warning({
        description: value,
      });
  };
  return <>{warning(props)}</>;
}

export default Warning;
