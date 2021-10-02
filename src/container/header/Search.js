import React, { useState } from "react";
import { Drawer, Button, Input , Space , Menu } from "antd";
import search from "../../icon/search.svg";

function Search() {
  const [ visible, setVisible ] = useState(false);
//   const { placement, setPlacement } = useState("left");
  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  const onChange = (e) => {
    console.log(e.value);
  };
  return (
    <>
      <Space>
        <Menu.Item onClick={showDrawer} style={{background:"#ffffff"}}>
          <img src={search} alt="logo" className="icon_header"/>
        </Menu.Item>
      </Space>
      <Drawer
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        key="right"
        width="30rem"
        className="searchHeader"
      >
        <h1>SEARCH</h1>
        <Input className="input_search_header" />
      </Drawer>
    </>
  );
}

Search.propTypes = {};

export default Search;
