import React from "react";
import "./Service.css";
import { Container, Row, Col } from "react-bootstrap";

const serviceData = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Gratis Antar - Jemput Mobil di Bandara",
];

const Service = () => {
  return (
    <Container fluid style={{ width: "100%" }}>
      <Row className="service-parent">
        <Col className="service-child">
          <img src="/src/assets/HappyGirl.png" alt="" />
        </Col>
        <Col className="service-child">
          <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul>
            {serviceData.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
