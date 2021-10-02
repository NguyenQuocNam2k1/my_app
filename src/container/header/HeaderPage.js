import React from "react";
import { Menu } from "antd";
import { Layout, Affix } from "antd";
import "./Header.css";
import logo from "../../image/WOW_logo_white.png";
import user from "../../icon/user.svg";
import Search from "./Search";
const { Header } = Layout;

function HeaderPage() {
  return (
    <Affix offsetTop={0}>
      <Header className="header header_background_color">
        <Menu mode="horizontal" className="header_background_color menu_item">
          <Menu.Item key="women" className="menu_item_child">
            WOMEN
          </Menu.Item>
          <Menu.Item key="men">MEM</Menu.Item>
          <Menu.Item key="kid">KID</Menu.Item>
        </Menu>
        <div>
          <img src={logo} alt="Logo" style={{zIndex:"50000"}}/>
        </div>
        <Menu
          mode="horizontal"
          className="header_background_color menu_item  list_icon"
        >
          <Menu.Item key="contact_us">CONTACT US</Menu.Item>
          <Menu.Item>
            <Search />
          </Menu.Item>
          <Menu.Item>
            <img src={user} alt="logo" className="icon_header" />
          </Menu.Item>
        </Menu>
      </Header>
    </Affix>
  );
}

export default HeaderPage;
