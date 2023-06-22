import React, { useState, useEffect } from "react";
import HeroSection from "../component/HeroSection/HeroSection";
import Footer from "../component/Footer/Footer";
import {
  optionCategorySearchBar,
  optionPriceSearchBar,
  optionStatusSearchBar,
  footerMenuLIst,
  socialMediaIcons,
} from "../helper/data";
import axios from "axios";
import "./CarSearchAndResult.css";

const CarDetail = () => {
  return (
    <>
        <HeroSection showBtn={false} showHea={false} showPic={false}/>
        <Footer menu={footerMenuLIst} icons={socialMediaIcons}/>
    </>
  )
}

export default CarDetail