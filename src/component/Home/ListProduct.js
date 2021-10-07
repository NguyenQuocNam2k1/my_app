import React, {useState} from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";


function ListProduct() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const renderListProduct = getAllProduct.map((product) => {
    const { id, title, image, price } = product;
    return (
      <Col span='6' id={id}>
        <div className='product'>
          <img
            src={image}
            alt="image_product"
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
  return (
    <Row>
      {renderListProduct}
    </Row>
  );
}

export default ListProduct;
