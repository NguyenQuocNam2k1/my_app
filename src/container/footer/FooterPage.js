import React from "react";
import "./FooterPage.css";
import { Row, Col } from "antd";

function FooterPage(props) {
  return (
    <div className='FooterPage'>
      {/* <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/sb_1570684484_63.jpg"  style={{maxWidth:"100%"}}/>
      <a src="#" className="store-footer">
          <span className="store-footer_span">Địa chỉ cửa hàng</span>
      </a> */}
      <Row>
        <Col span='5'>
          <p style={{textAlign:"center" , fontSize:"0.8rem" , fontWeight:"600" , marginBottom:"5px"}}>MUA HÀNG TRỰC TIẾP</p>
          <p style={{textAlign:"center",color:"#ef9608", fontFamily:"Quicksand,sans-serif",marginBottom:"5px" , fontSize:"1rem" , margin:"0"}}>0974032570</p>
          <p style={{textAlign:"center"}}><a src="gmail.com" className="link_email_footer">namtv27072001@gmail.com</a></p>
        </Col>
        <Col span='5'>
          <p style={{textAlign:"center" , fontSize:"0.8rem" , fontWeight:"600" , marginBottom:"5px"}}>HOTLINE GÓP Ý</p>
          <p style={{textAlign:"center",color:"#ef9608", fontFamily:"Quicksand,sans-serif",marginBottom:"5px" , fontSize:"1rem" , margin:"0"}}>0974032570</p>
        </Col>
        <Col span='5'>
          <div style={{width:"60%" , margin:"auto"}}>
            <p style={{fontSize:"1rem" , fontWeight:"600", marginTop:"0" , marginBottom:"5px"}}>Thông tin</p>
            <li className="list_footer" >Giới thiệu</li>
            <li className="list_footer">Liên hệ công ty đối tác</li>
            <li className="list_footer">Đối tác</li>
            <li className="list_footer">Tuyển dụng</li>
          </div>
        </Col>
        <Col span='5'>
        <div style={{width:"60%" , margin:"auto"}}>
            <p style={{fontSize:"1rem" , fontWeight:"600", marginTop:"0" , marginBottom:"5px"}}>Chính sách</p>
            <li className="list_footer" >Chính sách đổi hàng</li>
            <li className="list_footer">Chính sách bảo hành</li>
            <li className="list_footer">Chính sách bảo mật</li>
            <li className="list_footer">Chính sách hoàn tiền</li>
          </div>
        </Col>
        <Col span='4'>
        <div style={{width:"60%" , margin:"auto"}}>
            <p style={{fontSize:"1rem" , fontWeight:"600", marginTop:"0" , marginBottom:"5px"}}>FAQ</p>
            <li className="list_footer" >Thanh toán và vận chuyển</li>
            <li className="list_footer">Hướng dẫn chọn size</li>
            <li className="list_footer">Kiểm tra thông tin đơn hàng</li>
            <li className="list_footer">Câu hỏi thường gặp</li>
          </div>
        </Col>
      </Row>
      <Row></Row>
      <Row></Row>
    </div>
  );
}

export default FooterPage;
