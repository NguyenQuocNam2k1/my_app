import React, { useState, useEffect } from "react";
import "./Purchase.css";
import { useDispatch } from "react-redux";
import { Link , useHistory } from "react-router-dom";
import {
  delete_product_ordered,
  edit_quantity,
} from "../../redux/actions/productAction";
import { Row, Col, Modal , message } from "antd";
import Nodata from "../../container/loading/Nodata";
import {analyticProducts} from "../../redux/actions/adminAction";


function Purchase() {
  const [deleteOnlick, setDeleteOnlick] = useState(false);
  const history = useHistory();

  // Đoạn này xử lý modal thanh toán
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cartNumber , setCartNumber] = useState("");
  const [placeShipment , setPlaceShipment] = useState("");

  const onChangeGetInfoPayment = (e)=>{
    if(e.name === "cartNumber"){
      setCartNumber(e.value);
    }else if(e.name === "placeShipment"){
      setPlaceShipment(e.value);
    }
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    if(cartNumber !== "" && placeShipment !== ""){
      history.push("/paymentSuccess");
      setIsModalVisible(false);
      dispatch(analyticProducts());
    }else {
      message.warning('You need to fill in the information from!');
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };


  // Xử lý xóa sản phẩm khi đã thêm vào cart
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
  let infoUser = JSON.parse(localStorage.getItem("usersAccount"))[idUser-1];
  useEffect(() => {
    listOrder = JSON.parse(localStorage.getItem("ordersClient"));
    idUser = JSON.parse(localStorage.getItem("statusLogin"));
  }, [deleteOnlick]);

  var totalPrice = 0; //Biến giúp tính tổng tiền qua từng lần lặp
  const productOrder = listOrder.map((value, idex) => {
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
              {totalPrice.toFixed(2)}
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
              {parseFloat(totalPrice * 1.09).toFixed(2)}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Row justify='center' style={{ marginTop: "3rem" }}>
      {Object.keys(listOrder).length === 0 ? (
        <Nodata />
      ) : (
        <Col style={{ width: "90%", margin: "auto" }}>
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

            {/* Payment */}
            <Modal
              title='Payment'
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <label for="username" className="textInputPayment">Username</label><br/>
              <input type="text" className="input_payment" value={infoUser.userName}/>
              <label for="cart" className="textInputPayment">Nhập số thẻ ngân hàng</label><br/>
              <input type="text" className="input_payment" name="cartNumber" placeholder="**********" onChange ={(event) => onChangeGetInfoPayment(event.target)}/>
              <label for="email" className="textInputPayment">Email</label><br/>
              <input type="text" className="input_payment" value={infoUser.userEmail} />
              <label for="place" className="textInputPayment">Địa chỉ</label><br/>
              <input type="text" className="input_payment" name="placeShipment" placeholder="Ngách 52 Ngõ Trại Cá , Phương Trương Định , Quận Hai Bà Trưng , Hà Nội" onChange ={(event) => onChangeGetInfoPayment(event.target)} />
            </Modal>

            {productOrder}
            {totals()}
            <button className='checkout' onClick={showModal}>Tiến hành thanh toán</button>
            <Link to='/'>
            <button className='return'>Tiếp tục mua hàng</button>
            </Link>
          </div>
        </Col>
      )}
    </Row>
  );
}

export default Purchase;
