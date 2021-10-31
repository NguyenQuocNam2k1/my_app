import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import "./index.css";

function Index() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const getAllUser = JSON.parse(localStorage.getItem("usersAccount"));
  const getAnalyticProduct = JSON.parse(localStorage.getItem("AnalyticProduct"));
  const getTotalBill = JSON.parse(localStorage.getItem("totalBill"));
  const TotalUser = () => {
    return (
      <div className='boxTotal'>
        <h1 className='TotalText'>TotalUser</h1>
      </div>
    );
  };
  const TotalProduct = () => {
    return (
      <div className='boxTotal'>
        <h1 className='TotalText'>TotalUser</h1>
      </div>
    );
  };

  const TotalBill = () => {
    return (
      <div className='boxTotal'>
        <h1 className='TotalText'>TotalBill</h1>
      </div>
    );
  };
  return (
    <>
      <p>Admin</p>
      <Row justify='space-between'>
        <Col span='2'></Col>
        {TotalUser()}
        {TotalProduct()}
        {TotalBill()}
        <Col span='2'></Col>
      </Row>
    </>
  );
}

export default Index;
