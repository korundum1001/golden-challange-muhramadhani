import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const settings = {
  centerPadding: "30px",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const renderStars = (rating) => {
  const stars = [];
  const maxRating = 5;
  
  for (let i = 0; i < maxRating; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} />);
    } else {
      stars.push(<FaStar key={i} style={{ opacity: 0.5 }} />);
    }
  }
  
  return stars;
};

const TestiCarousel = ({ data }) => {
  return (
    <div>
      <h2>Testimonial</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <Carousel.Item className="itemCaro">
            <Card className="card-carousel">
              <Card.Body className="card-body">
                <div className="revPic">
                  <img src={item.image} alt="testi pic" />
                </div>
                <div className="revCont">
                  {renderStars(item.rating)}
                  <p className="revTex">{item.commentary}</p>
                  <p className="revPer">{item.profile}</p>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Slider>
    </div>
  );
};

export default TestiCarousel;
