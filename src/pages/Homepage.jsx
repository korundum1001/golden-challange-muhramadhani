import React, { useEffect, useState } from "react";
import HeroSection from "../component/HeroSection/HeroSection";
import Service from "../component/Service/Service";
import TestiCarousel from "../component/Carousel/Carousel";
import WhyUs from "../component/WhyUs/WhyUs";
import CTA from "../component/CTA/CTA";
import Faq from "../component/Faq/Faq";
import Footer from "../component/Footer/Footer";
import {
  serviceData,
  whyUsList,
  faqList,
  testimonialCarousel,
  footerMenuLIst,
  socialMediaIcons,
} from "../helper/data";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";


function Homepage() {
 
  
  return (
    <>
       <HeroSection showBtn={true} showHea={true} showPic={true} />
      <Service data={serviceData} />
      <TestiCarousel data={testimonialCarousel}/>
      <WhyUs data={whyUsList} />
      <CTA />
      <Faq data={faqList} />
      <Footer menu={footerMenuLIst} icons={socialMediaIcons} />
    </>
  );
}

export default Homepage;
