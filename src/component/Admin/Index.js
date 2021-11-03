import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Breadcrumb, Menu } from "antd";
import ChartProduct from "./ChartProduct";
import ChartUser from "./ChartUser";
import { Link } from "react-router-dom";
import "./index.css";

function Index() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const getAllUser = JSON.parse(localStorage.getItem("usersAccount"));
  const getTotalBill = JSON.parse(localStorage.getItem("totalBill"));
  const analyticProduct = JSON.parse(localStorage.getItem("AnalyticProduct"));
  let totalRevenue = 0;
  analyticProduct.forEach((value) => {
    totalRevenue = totalRevenue + (value.price * value.orderQuantity);
  });
  const TotalUser = (data, background , name , srcImage , backgroundText) => {
    //user <img src="https://img.icons8.com/material-outlined/96/000000/add-user-male.png"/>
    //Bill <img src="https://img.icons8.com/ios-filled/100/000000/bill.png"/>
    //Tong tien <img src="https://img.icons8.com/ios-filled/50/000000/total-sales-1.png"/>
    let urlImage = `https://img.icons8.com/${srcImage}`
    return (
      <div
        style={{
          marginBottom: "3rem",
          backgroundColor: background,
        }}
        className="boxTotalParent"
      >
        <div className='boxTotal'>
          <div style={{marginBottom:"0" , paddingBottom:"0"}}>
            <h1 className='TotalNumber'>{data}</h1>
            <h3 className='TotalText TotalUserText'>{name}</h3>
          </div>
          <div style={{marginBottom:"0", paddingBottom:"0"}}>
            <img src={urlImage} alt="logo_box" className="image_box_admin"/>
          </div>
        </div>
        <div className="text_more_parent" style={{backgroundColor:backgroundText}} >
          <p className="text_more">More info</p>
        </div>
      </div>
    );
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to='/adminTableUser'>User</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/adminTableProduct'>Product</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ backgroundColor: "rgb(244,246,249)", paddingBottom: "3rem" }}>
      <Row style={{ marginBottom: "2rem", paddingTop: "2rem" }}>
        <Col span='2'></Col>
        <Col span='20'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link
                to='/admin'
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  color: "black",
                }}
              >
                Dashboard
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              overlay={menu}
              className='text_header_admin text_header_admin_table'
            >
              Table
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span='2'></Col>
      </Row>
      <Row justify='space-between'>
        <Col span='1'></Col>
        <Col span='5'>{TotalUser(getAllUser.length, "rgb(220,53,69)" , "Total User","material-outlined/96/000000/add-user-male.png" ,"rgb(198,48,62)")}</Col>
        <Col span='5'>{TotalUser(getAllProduct.length, "rgb(23,162,184)" , "Total Product","ios/100/000000/bag-front-view.png" , "rgb(21,145,165)")}</Col>
        <Col span='5'>{TotalUser(getTotalBill, "rgb(40,167,69)" ,"Total Bill","ios-filled/100/000000/bill.png" ,"rgb(36,150,62)")}</Col>
        <Col span='5'>{TotalUser(`${totalRevenue}$`, "rgb(255,193,7)" , "Total Revenue","ios-filled/50/000000/total-sales-1.png" , "rgb(229,173,6)")}</Col>
        <Col span='1'></Col>
      </Row>
      <Row justify='space-between'>
        <Col span='1'></Col>
        <Col span='10'>
          <ChartProduct style={{ left: "0" }} />
        </Col>
        {/* <Col span='1'></Col> */}
        <Col span='10'>
          <ChartUser />
        </Col>
        <Col span='1'></Col>
      </Row>
    </div>
  );
}

export default Index;
