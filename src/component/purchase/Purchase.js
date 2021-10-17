import React, { useState, useEffect } from "react";
import "./Purchase.css";
import { useDispatch } from "react-redux";
import {
  delete_product_ordered,
  edit_quantity,
} from "../../redux/actions/productAction";
import { Row, Col } from "antd";
import Nodata from "../../container/loading/Nodata";

function Purchase() {
  const [deleteOnlick, setDeleteOnlick] = useState(false);
  const dispatch = useDispatch();
  const deleteProductOrdered = (id) => {
    dispatch(delete_product_ordered(id));
    setDeleteOnlick(!deleteOnlick);
  };

  const EditQuantity = (value, id) => {
    if (value !== "") {
      dispatch(edit_quantity(id, value));
      setDeleteOnlick(!deleteOnlick);
    }
  };

  let listOrder = JSON.parse(localStorage.getItem("ordersClient"));
  let idUser = JSON.parse(localStorage.getItem("statusLogin")).idUser;
  let getProductForIdUser = [];
  useEffect(() => {
    listOrder = JSON.parse(localStorage.getItem("ordersClient"));
    idUser = JSON.parse(localStorage.getItem("statusLogin"));
  }, [deleteOnlick]);

  var totalPrice = 0; //Biến giúp tính tổng tiền qua từng lần lặp
  listOrder.map((value) => {
    if (value.idUser === idUser) {
      getProductForIdUser.push(value);
    }
  });
  const productOrder = getProductForIdUser.map((value, idex) => {
    const { title, description, image, orderQuantity, price } = value;
    totalPrice += orderQuantity * parseFloat(price - 0.2 * price).toFixed(2);
    return (
      <div className='product' style={{ padding: "0 0 10px 0" }} key={idex}>
        <div className='product-image'>
          <img src={image} alt='image_product' />
        </div>
        <div className='product-details'>
          <div className='product-title'>{title}</div>
          <p className='product-description'>{description}</p>
        </div>
        <div className='product-price'>
          {parseFloat(price - 0.2 * price).toFixed(2)}
        </div>
        <div className='product-quantity'>
          <input
            type='text'
            defaultValue={orderQuantity}
            min={1}
            onChange={(e) => EditQuantity(e.target.value, idex)}
          />
        </div>
        <div className='product-removal'>
          <button
            className='remove-product'
            onClick={() => deleteProductOrdered(idex)}
          >
            Remove
          </button>
        </div>
        <div className='product-line-price'>
          {(orderQuantity * parseFloat(price - 0.2 * price)).toFixed(2)}
        </div>
      </div>
    );
  });

  const totals = () => {
    return (
      <>
        <div className='totals'>
          <div className='totals-item'>
            <label>Subtotal</label>
            <div className='totals-value' id='cart-subtotal'>
              {totalPrice}
            </div>
          </div>
          <div className='totals-item'>
            <label>Tax (5%)</label>
            <div className='totals-value' id='cart-tax'>
              {parseFloat(totalPrice * 0.05).toFixed(2)}
            </div>
          </div>
          <div className='totals-item'>
            <label>Shipping</label>
            <div className='totals-value' id='cart-shipping'>
              {parseFloat(totalPrice * 0.04).toFixed(2)}
            </div>
          </div>
          <div className='totals-item totals-item-total'>
            <label style={{ fontSize: "1.8rem" }}>Grand Total</label>
            <div
              className='totals-value'
              id='cart-total'
              style={{ fontSize: "1.8rem" }}
            >
              {parseFloat(totalPrice * 0.09 + totalPrice).toFixed(2)}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <Row justify='center' style={{ marginTop: "3rem" }}>
      {Object.keys(getProductForIdUser).length === 0 ? (
        <Nodata />
      ) : (
        <Col style={{width:"90%" , margin:"auto"}}>
          <h1 className='title_purchase'>Shopping Cart</h1>
          <div className='shopping-cart'>
            <div className='column-labels'>
              <label className='product-image'>Image</label>
              <label className='product-details'>Product</label>
              <label className='product-price'>Price</label>
              <label className='product-quantity'>Quantity</label>
              <label className='product-removal'>Remove</label>
              <label className='product-line-price'>Total</label>
            </div>
            {productOrder}
            {totals()}
            <button className='checkout'>Checkout</button>
          </div>
        </Col>
      )}
    </Row>
  );
}

export default Purchase;
