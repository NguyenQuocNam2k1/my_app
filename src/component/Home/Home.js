import React from "react";
import { Carousel } from "antd";
import slide1 from "../../image/slide1.jpg";
import slide2 from "../../image/slide2.jpg";
import slide4 from "../../image/slide4.png";
import "./Home.css";
import CardHome from "./CardHome";

function Home() {
  return (
    <div className="slide_home">
      <Carousel autoplay effect="fade">
        <div>
          <img src={slide2} className="image_slide" />
        </div>
        <div>
          <img src={slide4} className="image_slide" />
        </div>
        <div>
          <img src={slide1} className="image_slide" />
        </div>
      </Carousel>
      <div className="slide_home_page">
        <div className="featured_products_text">
          <h1>Sản phẩm bán chạy</h1>
        </div>
        {/* <div className="section-title-box"></div> */}
        <CardHome />
      </div>
    </div>
  );
}

export default Home;
