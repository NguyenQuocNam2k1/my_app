import React, { useState } from "react";
// import { TreeSelect, Space } from "antd";
import { useDispatch } from "react-redux";
import "./NavProduct.css";
import {
  onChangeLayout2,
  onChangeLayout4,
} from "../../redux/actions/productAction";
import layout1 from "../../icon/layout1.svg";
import layout2 from "../../icon/layout2.svg";
import down from "../../icon/down.svg";
import up from "../../icon/up.svg";
// const { TreeNode } = TreeSelect;

function NavProduct() {
  const dispatch = useDispatch();
  const [clickChooseItemShow , setClickChooseItem] = useState(false);
  const changeLayoutColumn2 = () => {
    dispatch(onChangeLayout2());
  };
  const changeLayoutColumn4 = () => {
    dispatch(onChangeLayout4());
  };
  const onClickShowChooseItem = () =>{
    setClickChooseItem(true);
  }
  return (
    <>
      <div className='nav_product'>
        <div className='chooseItem'>
          <div className='chooseItem-parents'>
            <div className="chooseItem-parents_text">DEFAULT SORTING</div>
            <div>
              <img src={down} alt="icon_down" className="chooseItem-parents_icon"/>
            </div>
          </div>
          <div className='chooseItem-icon'>
            <ul className='chooseItem-list'>
              <li className='chooseItem-item'>DEFAULT SORTING</li>
              <li className='chooseItem-item'>MEN CLOTHING</li>
              <li className='chooseItem-item'>JEWELERY</li>
              <li className='chooseItem-item'>ELECTRONICS</li>
              <li className='chooseItem-item'>WOMEN CLOTHING</li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={layout1}
            className='icon_layout_product'
            style={{
              width: "1.5rem",
              marginRight: "1.2rem",
              height: "2rem",
            }}
            alt='image_home'
            onClick={() => changeLayoutColumn4()}
          />
          <img
            src={layout2}
            alt='image_home'
            className='icon_layout_product'
            onClick={() => changeLayoutColumn2()}
            style={{
              width: "1.5rem",
              height: "3rem",
              marginTop: "-0.5rem",
              marginRight: "-0.2rem",
            }}
          />
        </div>
      </div>
      <div className='line'></div>
    </>
  );
}

export default NavProduct;
