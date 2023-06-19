import React from "react";
import "./Faq.css";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";


const Faq = ({data}) => {
  return (
    <Container fluid style={{ width: "100%" }} className="faq-container">
      <Row className="faq-parent">
        <Col lg={6} className="faq-child">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col lg={6} className="faq-child">
        {data.map(item => (
           <Accordion defaultActiveKey={item.number}>
           <Accordion.Item eventKey="0">
             <Accordion.Header>{item.question}</Accordion.Header>
             <Accordion.Body>
               {item.answer}
             </Accordion.Body>
           </Accordion.Item>
         </Accordion>
        ))}
         
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
