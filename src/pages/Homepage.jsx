import { useState } from 'react'
import './Homepage.css'
import NavbarMain from '../component/Navbar/NavbarMain';
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from '../component/HeroSection/HeroSection';
import Service from '../component/Service/Service';
// import CarouselWithCards from '../component/Carousel/Carousel';
import WhyUs from '../component/WhyUs/WhyUs';
import CTA from '../component/CTA/CTA';
import Faq from '../component/Faq/Faq';
import Footer from '../component/Footer/Footer';
import {dataMenu, serviceData, whyUsList, faqList, testimonialCarousel, footerMenuLIst, socialMediaIcons} from '../helper/data';

function Homepage() {

  return (
    <>
      <NavbarMain menu={dataMenu}/>
      <HeroSection/>
      <Service data={serviceData}/>
      {/* <CarouselWithCards/> */}
      <WhyUs data={whyUsList}/>
      <CTA/>
      <Faq data={faqList}/>
      <Footer menu={footerMenuLIst} icons={socialMediaIcons}/>
    </>
  )
}

export default Homepage;
