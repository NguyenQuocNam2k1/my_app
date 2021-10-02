import React from "react";
import PropTypes from "prop-types";
import HeaderPage from "./header/HeaderPage";
import { Layout } from "antd";
import Search from "./header/Search";
import Home from "../component/Home/Home";
const { Footer, Content } = Layout;

function HomePage(props) {
  return (
    <Layout>
      <HeaderPage className ="headerPage"/>
      <Content>
        <Home />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default HomePage;
