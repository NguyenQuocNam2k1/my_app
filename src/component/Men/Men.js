import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Anchor, Pagination } from "antd";
import "../Home/Home.css";
const { Link } = Anchor;

function Men() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const renderProductKid = getAllProduct.map((product) => {
    const { id, title, image, price } = product;
    return (
      <Col span='6' id={id}>
        <div className='product'>
          <img
            src={image}
            alt='image_product'
            style={{ width: "100%", height: "70%", padding: "auto" }}
            className='image_product'
          />
          <p className='text_product'>{title}</p>
          <div className='item__product-price'>
            <div style={{ color: "#939393", textDecoration: "line-through" }}>
              {parseFloat(price).toFixed(2)}$
            </div>
            <div
              style={{ color: "rgb(226, 45, 45)", textDecoration: "underline" }}
            >
              {parseFloat(price - 0.6 * price).toFixed(2)}$
            </div>
          </div>
          <div className='item__product__sale-off'>
            <span className='item__product__sale-off-percent'>10%</span>
          </div>
        </div>
      </Col>
    );
  });
  const listTree = () => {
    return (
      <Anchor affix={false}>
        <Link href='#components-anchor-demo-basic' title='Accessories'>
          <Link href='#Anchor-Props' title='Kids accessories' />
          <Link href='#Link-Props' title='Men accessories' />
          <Link href='#Link-Props' title='Women accessories' />
        </Link>
        <Link href='#components-anchor-demo-static' title='Kids clothing' />
        <Link href='#API' title='Lingerie'>
          <Link href='#Anchor-Props' title='Kids underwear' />
          <Link href='#Link-Props' title='Men underwear' />
          <Link href='#Link-Props' title='Women lingerie' />
        </Link>
        <Link href='#API' title='Men'>
          <Link href='#Anchor-Props' title='Men clothing' />
          <Link href='#Link-Props' title='Men swimwear' />
          <Link href='#Link-Props' title='Women lingerie' />
        </Link>
        <Link href='#Anchor-Props' title='Mix' />
        <Link href='#Anchor-Props' title='Sale' />
        <Link href='#API' title='Shoes'>
          <Link href='#Anchor-Props' title='Kids shoes' />
          <Link href='#Link-Props' title='Men shoes' />
          <Link href='#Link-Props' title='Women shoes' />
        </Link>
        <Link href='#API' title='Women'>
          <Link href='#Anchor-Props' title='Women clothing' />
          <Link href='#Link-Props' title='Women swimwear' />
        </Link>
      </Anchor>
    );
  };
  return (
    <>
      <Row>
        <Col span={2}> </Col>
        <Col span={4}>{listTree()}</Col>
        <Col span={16}>
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

export default Men;
