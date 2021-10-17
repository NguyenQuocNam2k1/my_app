import React, { useState } from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListProduct() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const renderListProduct = getAllProduct.map((product) => {
    const { id, title, image, price } = product;
    let price_old = parseFloat(price).toFixed(2);
    let price_new = parseFloat(price - 0.2 * price).toFixed(2);
    let price_sale = (((price_old - price_new) / price_old) * 100).toFixed(0);
    return (
      <Col span='6' id={id}>
        <Link to={`/product/${id}`}>
          <div className='product_list'>
            <div className='product_list_child'>
              <div className='image_product_big'>
                <img
                  src={image}
                  alt='image_product'
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p className='text_product'>{title}</p>
              <div className='item__product-price'>
                <div
                  style={{ color: "#939393", textDecoration: "line-through" }}
                >
                  {price_old}$
                </div>
                <div
                  style={{
                    color: "rgb(226, 45, 45)",
                    textDecoration: "underline",
                  }}
                >
                  {price_new}$
                </div>
              </div>
              <div className='item__product__sale-off'>
                <p className='item__product__sale-off-text'> Sale</p>
                <span className='item__product__sale-off-percent'>
                  {price_sale}%
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Col>
    );
  });
  return ( <Row justify='center'>{renderListProduct}</Row> );
}

export default ListProduct;
