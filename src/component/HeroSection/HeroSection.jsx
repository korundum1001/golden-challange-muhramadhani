import React from "react";
import "./HeroSection.css";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container fluid style={{ width: "100%" }}>
      <Row className="herosection-container">
        <Col flex="1" className="herosection-child herosection-left">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button>Mulai Sewa Mobil</button>
        </Col>
        <Col flex="1" className="herosection-child herosection-right">
          <div>
            <img src="/src/assets/MercedesCar.png" alt="Foto Mobil" />
          </div>
          <div className="car-background"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
