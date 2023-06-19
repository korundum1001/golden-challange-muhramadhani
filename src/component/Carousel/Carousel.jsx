import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card } from "react-bootstrap";


const testimonialCarousel = [
  {
    image: "wwww.image1.com",
    rating: "4",
    commentary:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    profile: "John Dee 32, Bromo",
  },
  {
    image: "wwww.image2.com",
    rating: "5",
    commentary:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    profile: "John Dee 32, Bromo",
  },
  {
    image: "wwww.image3.com",
    rating: "5",
    commentary:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    profile: "John Dee 32, Bromo",
  },
];

// const Carousel = () => {
//   return (
//     <div>
//       <div>
//         <h2>Testimonial</h2>
//         <p>Berbagai review positif dari para pelanggan kami</p>
//       </div>
//       <div>

//       </div>
//     </div>
//   );
// };

// export default Carousel;

// const CarouselWithCards = () => {
//     const cards = [
//       { title: "Card 1", description: "Lorem ipsum dolor sit amet" },
//       { title: "Card 2", description: "Consectetur adipiscing elit" },
//       { title: "Card 3", description: "Praesent commodo cursus magna" },
//       { title: "Card 4", description: "Nunc eget leo at dolor tempor" },
//       { title: "Card 5", description: "Donec varius tellus ac tellus" },
//       { title: "Card 6", description: "Nulla facilisi. Aenean facilisis" },
//     ];
  
//     return (
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8}>
//               <Carousel activeIndex={index} onSelect={() => {}}>
//                 <Carousel.Item>
//                   <Row>
//                     {cards.slice(0, 3).map((card, cardIndex) => (
//                       <Col key={cardIndex}>
//                         <Card>
//                           <Card.Body>
//                             <Card.Title>{card.title}</Card.Title>
//                             <Card.Text>{card.description}</Card.Text>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ))}
//                   </Row>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <Row>
//                     {cards.map((card, cardIndex) => (
//                       <Col key={cardIndex}>
//                         <Card>
//                           <Card.Body>
//                             <Card.Title>{card.title}</Card.Title>
//                             <Card.Text>{card.description}</Card.Text>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ))}
//                   </Row>
//                 </Carousel.Item>
//               </Carousel>
//               <div className="carousel-controls">
//                 <Button variant="primary" onClick={handlePrev} disabled={index === 0}>
//                   Prev
//                 </Button>
//                 <Button variant="primary" onClick={handleNext} disabled={index === cards.length - 1}>
//                   Next
//                 </Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
    //   );
//   };
  
  export default CarouselWithCards;
