import React from "react";
import './WhyUs.css'
import { Container, Row, Col } from "react-bootstrap";


const WhyUs = ({data}) => {

    return (
        <Container fluid style={{ width: "100%" }} className="whyus-container">
            <Row className="whyus-parent">
                <Col className="whyus-child">
                    <h3>Why Us</h3>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </Col>
            </Row>
            <Row className="whyus-parent" id="whyus-parent-two">
                {data.map((item) => (
                    <Col lg={4} className="whyus-card">
                        <div><img src={item.icon} alt="" /></div>
                        <div>{item.feature}</div>
                        <div>{item.description}</div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default WhyUs;