import React from 'react';
import { useSelector } from "react-redux";
import { Row, Col } from 'antd';

function Kid(props) {
    const getAllProduct = useSelector((state) => state.allProduct.products);
    return (
        <Row>
          <Col span={2}> </Col>
          <Col span={4}> hi</Col>
          <Col span={18}>Hello</Col>
        </Row>
    )
}

export default Kid;

