import { notification } from "antd";

function Success(props) {
  const success = (value) => {
    notification.config({
        top:"8rem"
      });
      notification.success({
        description: value,
        duration: 2
      });
  };
  return success(props);
}

export default Success;
