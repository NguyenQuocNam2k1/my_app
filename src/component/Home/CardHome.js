import React from "react";
import { Card, Col, Row } from "antd";
import bannerBig from "../../image/bannerBig.png";
import bannerSmall1 from "../../image/bannerSmall1.png";
import bannerSmall2 from "../../image/bannerSmall2.png";
import bannerSmall3 from "../../image/bannerSmall3.jpg";
import bannerSmall4 from "../../image/bannerSmall4.png";

function CardHome() {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card bordered={false}>
          <img src={bannerBig} style={{width:"100%" , height:"100%"}} className="bannerBig"/>
        </Card>
      </Col>
      <Col span={12}>
        <Row>
          <Col span={12}>
            <Card bordered={false}>
              <img src={bannerSmall1} style={{width:"100%" , height:"100%"}} className="bannerSmall"/>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <img src={bannerSmall2} style={{width:"100%" , height:"100%"}} className="bannerSmall"/>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <img src={bannerSmall3} style={{width:"100%" , height:"100%"}} className="bannerSmall"/>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <img src={bannerSmall4} style={{width:"100%" , height:"100%"}} className="bannerSmall"/>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CardHome;
