import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Pagination, Breadcrumb } from "antd";
import "../Home/Home.css";
import "../Kid/page.css";
import { Link } from "react-router-dom";
import NavProduct from "../navproduct/NavProduct";
import ListTree from "../navproduct/ListTree";


function Women() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const changeLayout = useSelector((state) => state.allProduct.layout);

  const renderProductKid = getAllProduct.map((product) => {
    const { id, title, image, price } = product;
    return (
      <>
        <Col span={changeLayout === 4 ? "0" : "2"}></Col>
        <Col span={changeLayout === 4 ? "6" : "8"} id={id}>
          <Link to={`/product/${id}`}>
            <div className='product'>
              <img
                src={image}
                alt='image_product'
                style={{ width: "100%", height: "70%", padding: "auto" }}
                className='image_product'
              />
              <p className='text_product'>{title}</p>
              <div className='item__product-price'>
                <div
                  style={{ color: "#939393", textDecoration: "line-through" }}
                >
                  {parseFloat(price).toFixed(2)}$
                </div>
                <div
                  style={{
                    color: "rgb(226, 45, 45)",
                    textDecoration: "underline",
                  }}
                >
                  {parseFloat(price - 0.6 * price).toFixed(2)}$
                </div>
              </div>
              <div className='item__product__sale-off'>
                <span className='item__product__sale-off-percent'>10%</span>
              </div>
            </div>
          </Link>
        </Col>
        <Col span={changeLayout === 4 ? "0" : "2"}></Col>
      </>
    );
  });
  const titlePage = () => {
    return (
      <>
        <Breadcrumb separator='>' className='title_page'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
          <Breadcrumb.Item>Kids</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className='title_main'>Kids clothing</h1>
      </>
    );
  };
  return (
    <>
      <Row>{titlePage()}</Row>
      <Row>
        <Col span={2}> </Col>
        <Col span={4}>
          <ListTree />
        </Col>
        <Col span={16}>
          <Row>{<NavProduct />}</Row>
          <Row>{renderProductKid}</Row>
        </Col>
        <Col span={2}></Col>
      </Row>
      <Pagination
        size='small'
        total={50}
        defaultPageSize='10'
        size='large'
        style={{ textAlign: "center" }}
      />
    </>
  );
}

export default Women;
