import React from "react";
import { TreeSelect, Space } from "antd";
import {  useDispatch } from "react-redux";
import "./NavProduct.css";
import { onChangeLayout2, onChangeLayout4 } from "../../redux/actions/productAction";
import layout1 from "../../icon/layout1.svg";
import layout2 from "../../icon/layout2.svg";
const { TreeNode } = TreeSelect;

function NavProduct() {
  const dispatch = useDispatch();
  const changeLayoutColumn2 = () =>{
    dispatch(onChangeLayout2())
  }
  const changeLayoutColumn4 = () =>{
    dispatch(onChangeLayout4())
  }
  return (
    <>
      <div className='nav_product'>
        <div>
          <Space direction='vertical'>
            <TreeSelect
              bordered={false}
              style={{
                width: "10rem",
              }}
              className ="treeSelect"
            >
              <TreeNode className='tree_node' title='parent 1'></TreeNode>
            </TreeSelect>
          </Space>
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
            onClick={()=>changeLayoutColumn4()}
          />
          <img
            src={layout2}
            alt='image_home'
            className='icon_layout_product'
            onClick={()=>changeLayoutColumn2()}
            style={{ width: "1.5rem", height: "3rem", marginTop: "-0.5rem", marginRight:"-0.2rem" }}
          />
        </div>
      </div>
      <div className='line'></div>
    </>
  );
}

export default NavProduct;
