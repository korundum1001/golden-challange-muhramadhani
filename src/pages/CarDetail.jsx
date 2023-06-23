import React, { useState, useEffect } from "react";
import HeroSection from "../component/HeroSection/HeroSection";
import DetailPack from "../component/DetailPack/DetailPack";
import Footer from "../component/Footer/Footer";
import {
  includePackage,
  excludePackage,
  RROPackage,
  footerMenuLIst,
  socialMediaIcons,
} from "../helper/data";
import axios from "axios";
import "./CarSearchAndResult.css";

const CarDetail = () => {
  return (
    <>
        <HeroSection showBtn={false} showHea={false} showPic={false}/>
        <DetailPack incdb={includePackage} excdb={excludePackage} rrodb={RROPackage}/>
        <Footer menu={footerMenuLIst} icons={socialMediaIcons}/>
    </>
  )
}

export default CarDetail