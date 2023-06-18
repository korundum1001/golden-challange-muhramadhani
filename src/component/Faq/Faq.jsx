import React from "react";
import "./Faq.css";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const faqList = [
  {
    number : 1, 
    question : 'Apa saja syarat yang dibutuhkan?',
     answer : "answer 1"
  },
  {
    number : 2, 
    question : 'Berapa hari minimal sewa mobil lepas kunci?',
     answer : "answer 2"
  },
  {
    number : 3, 
    question : 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
     answer : "answer 3"
  },
  {
    number : 4, 
    question : 'Apakah Ada biaya antar-jemput?',
     answer : "answer 4"
  },
  {
    number : 5, 
    question : 'Bagaimana jika terjadi kecelakaan',
     answer : "answer 5" 
  }
]

const Faq = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col>
        {faqList.map(item => (
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
