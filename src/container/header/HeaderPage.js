import React, { useState } from "react";
import { Menu } from "antd";
import { Layout, Affix } from "antd";
import "./Header.css";
import logo from "../../image/WOW_logo_white.png";
import user from "../../icon/user.svg";
import Search from "./Search";
import { BrowserRouter as Router, Link } from "react-router-dom";
const { Header } = Layout;

function HeaderPage() {
  const [scrolled, setScrolled] = useState(0);
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY);
  });
  return (
    <Affix>
      <Header className={scrolled > 10 ? "header_scroll" : "header"}>
        <Menu
          mode='horizontal'
          className={scrolled > 10 ? "menu_item_scroll" : "menu_item"}
        >
          <Link to='/women' className={scrolled > 10 ? "link_page_scroll" : "link_page"}>
            WOMEN
          </Link>
          <Link to='/man' className={scrolled > 10 ? "link_page_scroll" : "link_page"}>
            MEM
          </Link>
          <Link to='/kid' className={scrolled > 10 ? "link_page_scroll" : "link_page"}>
            KID
          </Link>
        </Menu>
        <div>
          <Link to='/'>
            <img src={logo} alt='Logo' style={{ zIndex: "50000" }} />
          </Link>
        </div>
        <Menu mode='horizontal' className={scrolled > 10 ? "menu_item_scroll list_icon" : "menu_item list_icon"}>
          <div style={{ textAlign: "center" }}>
            <Link to='/kid' className={scrolled > 10 ? "link_page_scroll" : "link_page"}>
              CONTACT US
            </Link>
            <Link to='log_in' className={scrolled > 10 ? "link_page_scroll" : "link_page"}>
              <img src={user} alt='logo' className='icon_header' />
            </Link>
          </div>
        </Menu>
      </Header>
    </Affix>
  );
}

export default HeaderPage;
