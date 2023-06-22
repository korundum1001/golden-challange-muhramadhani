import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Carousel } from "react-bootstrap";

const settings = {
  centerPadding: '30px',
centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const testimonialCarousel = [
  {
    image: "/src/assets/img_photo.png",
    rating: "4",
    commentary:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    profile: "John Dee 32, Bromo",
  },
  {
    image: "/src/assets/img_photo(1).png",
    rating: "5",
    commentary:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    profile: "John Dee 32, Bromo",
  },
  {
    image: "/src/assets/img_photo.png",
    rating: "5",
    commentary:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
    profile: "John Dee 32, Bromo",
  },
];

const TestiCarousel= () => {
  return (
    <div>
      <h2>Testimonial</h2>
      <Slider {...settings} >
        {testimonialCarousel.map(item => (
           <Carousel.Item className='itemCaro'>
           <Card className="card-carousel" >
             <Card.Body className="card-body">
               <div className="revPic">
                 <img src={item.image} alt='testi pic' />
               </div>
               <div className="revCont">
                 <img className='revSta' src='stars.png' alt='bintang5'/>
                 <p className='revTex'>{item.commentary}</p>
                 <p className='revPer'>{item.profile}</p>
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