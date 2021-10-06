import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

function NotFound() {
  return (
    <Result
      status='403'
      title='403'
      subTitle='Sorry, you are not found this page.'
      extra={
        <Link to="/">
          <Button type='primary'>Back Home</Button>
        </Link>
      }
    />
  );
}

export default NotFound;
