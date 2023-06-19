import React from "react";
import "./Service.css";
import { Container, Row, Col } from "react-bootstrap";



const Service = ({data}) => {
  return (
    <Container fluid style={{ width: "100%" }} className="service-container">
      <Row className="service-parent">
        <Col xs={12} lg={6} className="service-child">
          <div className="green-circle"></div>
          <div className="yellow-circle"></div>
          <div className="blue-circle">
            <img src="/src/assets/HappyGirl.png" alt="" />
          </div>
          <div className="red-circle"></div>
        </Col>
        <Col xs={12} lg={6} className="service-child">
          <div>
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
          </div>
          <div>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
          </div>
          <div>
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
