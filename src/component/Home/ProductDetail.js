import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import "./Home.css";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  addOrder,
  restartStatusOrder,
} from "../../redux/actions/productAction";
import Loading from "../../container/loading/Loading";
import { InputNumber } from "antd";
import error from "../notification/Error";
import Success from "../notification/Success";

function ProductDetail() {
  const { productId } = useParams();
  const [onClickSizeClass, setOnClickSizeClass] = useState("S");
  const product = useSelector((state) => state.allProduct.product);
  const statusOrder = useSelector((state) => state.allProduct.statusAddOrder);
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   if(productId !== "") dispatch(getProduct(productId));
  // }, [productId]);

  useEffect(() => {
    if (statusOrder) {
      Success("Add order success ✔️");
      setTimeout(() => {
        dispatch(restartStatusOrder());
      }, [500]);
    }
    if (productId !== "") dispatch(getProduct(productId));
  }, [statusOrder || productId]);

  const onChange = (value) => {
    product["orderQuantity"] = value;
  };

  const onClickSize = (value) => {
    // console.log(value.textContent)
    // Cần có textContent bởi vì khi click vào button nó sẽ trả về 2 trường hợp 1 là trả về cả button , 2 là trả về nguyên thẻ p
    // Nên cần có textContent để lấy string trong thẻ trả về
    product["orderSize"] = value.textContent;
    setOnClickSizeClass(value.textContent);
  };

  const onClickAddOrder = (value) => {
    const { status, idUser } = JSON.parse(localStorage.getItem("statusLogin"));
    product["idUser"] = idUser;
    // console.log(value.textContent);
    if (!status) {
      error("You need to login to make a purchase 😭");
    } else {
      if (product.orderSize === undefined || product.orderSize === "")
        product["orderSize"] = "S";
      if (product.orderQuantity === undefined) product["orderQuantity"] = 1;
      if (value.textContent.trim() === "BUY NOW") history.push("/myCar");
      dispatch(addOrder(product, value.textContent.trim()));
    }
    setTimeout(() => {
      product["orderSize"] = "";
    }, 200);
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
          <Row justify='center' style={{marginBottom: "3rem"}}>
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
                  <button
                    style={{ marginRight: "0.5rem" }}
                    onClick={(event) => onClickSize(event.target)}
                    className={
                      onClickSizeClass === "S"
                        ? "button_size_click"
                        : "button_size"
                    }
                  >
                    <p
                      style={{
                        fontWeight: "600",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        margin: "auto",
                      }}
                    >
                      S
                    </p>
                  </button>
                  <button
                    style={{ marginRight: "0.5rem" }}
                    onClick={(event) => onClickSize(event.target)}
                    className={
                      onClickSizeClass === "M"
                        ? "button_size_click"
                        : "button_size"
                    }
                  >
                    <p
                      style={{
                        fontWeight: "600",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        margin: "auto",
                      }}
                    >
                      M
                    </p>
                  </button>
                  <button
                    onClick={(event) => onClickSize(event.target)}
                    className={
                      onClickSizeClass === "L"
                        ? "button_size_click"
                        : "button_size"
                    }
                  >
                    <p
                      style={{
                        fontWeight: "600",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        margin: "auto",
                      }}
                    >
                      L
                    </p>
                  </button>
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
                      onClick={(event) => onClickAddOrder(event.target)}
                    >
                      ADD TO CART
                    </button>
                  </Col>
                  <Col span='12'>
                    <button
                      className='button_purchase button_purchase_buy'
                      onClick={(event) => onClickAddOrder(event.target)}
                    >
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
