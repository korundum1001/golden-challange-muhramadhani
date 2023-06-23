import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataMenu } from "../../helper/data";

const HeroSection = ({showBtn, showHea, showPic, className}) => {
  return (
    <Container
      fluid
      style={{ width: "100%" }}
      className="navandherosection-container"
    >
      <Row>
        <NavbarMain menu={dataMenu} />
      </Row>

      <Row className="herosection-parent">
        <Col
          flex="1"
          xs={12}
          md={6}
          className="herosection-child herosection-left"
        >
          {showHea && (
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          )}
          {showHea && (
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          )}
          <Link to={"/CarSearch"}>
            {showBtn && <Button variant="custom">Mulai Sewa Mobil</Button>}
          </Link>
        </Col>
        <Col
          flex="1"
          xs={12}
          md={4}
          className="herosection-child herosection-right"
        >
          {showPic && (<div className="hero-img-background"></div>)}
          <div className="hero-img">
            {showPic && (
              <img src="/src/assets/MercedesCar.svg" alt="foto mobil" />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
