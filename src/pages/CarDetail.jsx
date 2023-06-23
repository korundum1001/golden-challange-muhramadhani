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
import "./CarDetail.css";

const CarDetail = () => {
  return (
    <>
      <div className="upper-section">
        {" "}
        <HeroSection
          showBtn={false}
          showHea={false}
          showPic={false}
          className="hero-in-car-detail"
        />
        <DetailPack
          incdb={includePackage}
          excdb={excludePackage}
          rrodb={RROPackage}
        />
      </div>

      <Footer menu={footerMenuLIst} icons={socialMediaIcons} />
    </>
  );
};

export default CarDetail;
