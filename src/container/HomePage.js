import React, { useEffect , useState } from "react";
import HeaderPage from "./header/HeaderPage";
import { Layout, BackTop } from "antd";
import Home from "../component/Home/Home";
import Kid from "../component/Kid/Kid";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../redux/actions/productAction";
import Loading from "./loading/Loading";
import FooterPage from "./footer/FooterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UpOutlined } from "@ant-design/icons";
import NotFound from "./NotFound"
const { Footer, Content } = Layout;

function HomePage() {
  const dispatch = useDispatch();
  const style = {
    height: "4rem",
    width: "4rem",
    lineHeight: "4rem",
    borderRadius: "3rem",
    backgroundColor: "black",
    textAlign: "center",
    fontSize: 14,
  };


  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const products = useSelector((state) => state.allProduct.products);
  return (
    <>
      {Object.keys(products).length === 0 ? (
        <Loading />
      ) : (
        <Router>
          <Layout style={{backgroundColor:"white"}}>
            <BackTop style={{ right: "3rem" }}>
              <div style={style}>
                <UpOutlined style={{color:"white" , fontSize:"1.2rem"}} />
              </div>
            </BackTop>
            <HeaderPage className='headerPage'/>
            <Content>
              <Switch>
                <Route path='/' exact component={Home} />
                {/* <Route path="/man" exact component={Home} />
                <Route path="/women" exact component={Home} /> */}
                <Route path='/kid' exact component={Kid} />
                <Route> <NotFound /> </Route>
              </Switch>
            </Content>
            <Footer style={{ backgroundColor: "#000", marginTop: "4.5rem" }}>
              <FooterPage />
            </Footer>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default HomePage;
