import React, { useEffect , useState } from "react";
import HeaderPage from "./header/HeaderPage";
import { Layout, BackTop } from "antd";
import Home from "../component/Home/Home";
import Kid from "../component/Kid/Kid";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../redux/actions/productAction";
import Loading from "./loading/Loading";
import FooterPage from "./footer/FooterPage";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import { UpOutlined } from "@ant-design/icons";
import NotFound from "./NotFound";
import Men from "../component/Men/Men";
import Women from "../component/Women/Women";
import ProductDetail from "../component/Home/ProductDetail";
import IndexLogin from "../component/Login/Index";
import Purchase from "../component/purchase/Purchase";


const { Footer, Content } = Layout;

function HomePage() {
  const dispatch = useDispatch();
  const [windowHeight, setWindowHeight] = useState();
  
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
    setWindowHeight(window.screen.height / 2);
  }, []);
  const products = useSelector((state) => state.allProduct.products);
  return (
    <>
      {Object.keys(products).length === 0 ? (
        <Loading />
      ) : (
        <Router>
          <Layout style={{ backgroundColor: "white" }}>
            <BackTop style={{ right: "3rem" }}>
              <div style={style}>
                <UpOutlined style={{ color: "white", fontSize: "1.2rem" }} />
              </div>
            </BackTop>
            <HeaderPage className='headerPage' />
            <Content style={{ paddingBottom: "3rem" , minHeight:windowHeight}}>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/men"  component={Men} />
                <Route path="/women"  component={Women} />
                <Route path='/kid'  component={Kid} />
                <Route path="/logIn" component={IndexLogin} />
                <Route path="/myCar" component={Purchase} />
                <Route path="/product/:productId" component={ProductDetail} />
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ backgroundColor: "#000" }}>
              <FooterPage />
            </Footer>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default HomePage;
