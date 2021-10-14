import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import "./Home.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import Loading from "../../container/loading/Loading";
import { Button, InputNumber } from "antd";
import error  from "../notification/Error";

function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector((state) => state.allProduct.product);
  const singIn = useSelector((state) => state.accounts.singIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);

  const onChange = (value) => {
    console.log("changed", value);
  };
  const showMessage = () => {
    if(!singIn){
      error("You need to login to make a purchase!")
    }
  };

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Loading />
      ) : (
        <>
          <Row justify='center'>
            <h1 className='title_main_product_detail'>Product detail</h1>
          </Row>
          <Row justify='center'>
            <Col span='6' offset='1'>
              <div>
                <img
                  src={product.image}
                  alt='image_product'
                  className='image_product_detail'
                />
              </div>
            </Col>
            <Col span='10' offset='1'>
              <h1 className='title_product_detail'>{product.title}</h1>
              <h3 className='price_product_detail'>
                {parseFloat(product.price - 0.6 * product.price).toFixed(2)}$
              </h3>
              <Row className='quantity_size' justify='space-between'>
                <Col>
                  <p className='text_quantity_size'>Select size</p>
                  <Button style={{ marginRight: "0.5rem" }}>
                    <p style={{ color: "black", fontWeight: "500" }}>S</p>
                  </Button>
                  <Button style={{ marginRight: "0.5rem" }}>
                    <p style={{ color: "black", fontWeight: "500" }}>M</p>
                  </Button>
                  <Button>
                    <p style={{ color: "black", fontWeight: "500" }}>L</p>
                  </Button>
                </Col>
                <Col offset='9'>
                  <p className='text_quantity_size'>Quantity</p>
                  <InputNumber
                    min={1}
                    size='large'
                    defaultValue={1}
                    onChange={onChange}
                    style={{ width: "4rem" }}
                  />
                </Col>
              </Row>
              <div className='purchase'>
                <Row justify='space-between' gutter='10'>
                  <Col span='12'>
                    <button
                      className='button_purchase button_purchase_add'
                      onClick={() => showMessage()}
                    >
                      ADD TO CART
                    </button>
                  </Col>
                  <Col span='12'>
                    <button className='button_purchase button_purchase_buy'
                    onClick={() => showMessage()}>
                      BUY NOW
                    </button>
                  </Col>
                  <Col span='24' style={{ marginTop: "1rem" }}>
                    <button className='button_purchase button'>
                      Available in stores
                    </button>
                  </Col>
                </Row>
              </div>
              <h1 className='text_product_detail'>
              ❗❗❗ 90 DAY PRODUCT WARRANTY
              </h1>
              <h1 className='text_product_detail'>
              ❗❗❗ EXCHANGE WITHIN 30 DAYS
              </h1>
              <h1 className='text_product_detail' style={{ marginBottom: "0" }}>
              ❗❗❗ HOTLINE BÁN HÀNG 1900 633 501
              </h1>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
export default ProductDetail;
