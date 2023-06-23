import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";


function Footer({menu, icons}) {
  return (
    <Container fluid style={{ width: "100%" }} className="footer-container">
      <Row className="footer-parent">
        <Col lg={3} sm={6} className="footer-child footer-child-address">
          <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
          <div>binarcarrental@gmail.com</div>
          <div>081-233-334-808</div>
        </Col>
        <Col lg={3} sm={6} className="footer-child">
          <ul>
            {menu.map((list) => (
              <li>
                <a href={list.link}>{list.menuName}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={3} sm={6} className="footer-child" id="footer-child-icons">
          <div><p>Connect with us</p></div>
          <div className="footer-icons">
            {icons.map((icon) => (
              <div>
                <a href={icon.link}>
                  <img src={icon.iconPath} alt="" />
                </a>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={3} sm={6} className="footer-child">
          <div><p>Copyright Binar 2021</p></div>
          <div className="footer-logo"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
