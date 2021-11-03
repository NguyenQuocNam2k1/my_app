import React from "react";
import { Carousel, Pagination } from "antd";
import slide1 from "../../image/slide1.jpg";
import slide2 from "../../image/slide2.jpg";
import slide4 from "../../image/slide4.png";
import "./Home.css";
import iconLayout1 from "../../icon/layout1.svg";
import iconLayout2 from "../../icon/layout2.svg";
import CardHome from "./CardHome";
import ListProduct from "./ListProduct";

function Home() {
  return (
    <div className='slide_home' style={{marginBottom: "3rem"}}>
      <Carousel autoplay effect='fade'>
        <div>
          <img alt='logo_slide' src={slide2} className='image_slide' />
        </div>
        <div>
          <img alt='logo_slide' src={slide4} className='image_slide' />
        </div>
        <div>
          <img alt='logo_slide' src={slide1} className='image_slide' />
        </div>
      </Carousel>
      <div className='slide_home_page'>
        <div className='featured_products_text'>
          <h1>Sản phẩm bán chạy</h1>
        </div>
        {/* <div className="section-title-box"></div> */}
        <CardHome />
        <div className='list_product_home'>
          <div className='nav_list_product'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 className='title_list_product'>Sản phẩm mới</h1>
              <div style={{ display: "flex", marginTop: "2.4rem" }}>
                <img
                  src={iconLayout1}
                  className='icon_layout'
                  style={{
                    width: "2rem",
                    marginRight: "1.5rem",
                    height: "2rem",
                  }}
                  alt='image_home'
                />
                <img
                  src={iconLayout2}
                  alt='image_home'
                  className='icon_layout'
                  style={{
                    width: "2rem",
                    height: "3rem",
                    marginTop: "-0.5rem",
                  }}
                />
              </div>
            </div>
            <div className='section-title-box'></div>
          </div>

          <ListProduct />
          <Pagination
            size='small'
            total={50}
            defaultPageSize='10'
            style={{ textAlign: "center" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
