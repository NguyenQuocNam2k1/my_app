import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Row, Col, Pagination, Breadcrumb } from "antd";
import "../Home/Home.css";
import "./page.css";
import { Link } from "react-router-dom";
import NavProduct from "../navproduct/NavProduct";
import ListTree from "../navproduct/ListTree";

function Kid() {
  const getAllProduct = useSelector((state) => state.allProduct.products);
  const changeLayout = useSelector((state) => state.allProduct.layout);
  const [pageSizeNow, setPageSizeNow] = useState(1)
  const ClickPageSizeNow = (page, pageSize) =>{
    setPageSizeNow(page);
  }
  let countProduct = 0;
  const renderProductKid = getAllProduct.map((product , index) =>{
    if(((pageSizeNow - 1) * 10) <= index && index < (pageSizeNow * 10) && countProduct < 10){
      countProduct += 1;
      const { id, title, image, price } = product;
      let price_old = parseFloat(price).toFixed(2);
      let price_new = parseFloat(price - 0.2 * price).toFixed(2);
      let price_sale = (((price_old - price_new) / price_old) * 100).toFixed(0);
      return (
        <>
          <Col span={changeLayout === 4 ? "0" : "2"}></Col>
          <Col span={changeLayout === 4 ? "6" : "8"} key={id}>
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
          <Col span={changeLayout === 4 ? "0" : "2"}></Col>
        </>
      );
    }
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
        total={getAllProduct.length}
        defaultPageSize='10'
        style={{ textAlign: "center" , marginBottom:"3rem" }}
        onChange={(page, pageSize) => ClickPageSizeNow(page, pageSize)}
      />
    </>
  );
}

export default Kid;
