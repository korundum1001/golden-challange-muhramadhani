import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const footerMenuLIst = [
  {
    menuName: "Our Services",
    link: "#",
  },
  {
    menuName: "Why Us",
    link: "#",
  },
  {
    menuName: "Testimonial",
    link: "#",
  },
  {
    menuName: "FAQ",
    link: "#",
  },
];

const socialMediaIcons = [
  {
    iconPath: "/src/assets/icon_facebook.png",
    link: "#",
  },
  {
    iconPath: "/src/assets/icon_instagram.svg",
    link: "#",
  },
  {
    iconPath: "/src/assets/icon_twitter.svg",
    link: "#",
  },
  {
    iconPath: "/src/assets/icon_mail.svg",
    link: "#",
  },
  {
    iconPath: "/src/assets/icon_twitch.svg",
    link: "#",
  },
];

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col>
          <ul>
            {footerMenuLIst.map((list) => (
              <li>
                <a href={list.link}>{list.menuName}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <p>Connect with us</p>
          <div>
            {socialMediaIcons.map((icon) => (
              <div>
                <a href={icon.link}>
                  <img src={icon.iconPath} alt="" />
                </a>
              </div>
            ))}
          </div>
        </Col>
        <Col>
          <p>Copyright Binar 2021</p>
          <div></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
