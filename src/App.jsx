import { useState } from 'react'
import './App.css'
import NavbarMain from './component/Navbar/NavbarMain'
import "bootstrap/dist/css/bootstrap.min.css";
import dataMenu from './helper/dataMenu';
import HeroSection from './component/HeroSection/HeroSection';
import Service from './component/Service/Service';
import WhyUs from './component/WhyUs/WhyUs';
import CTA from './component/CTA/CTA';
import Faq from './component/Faq/Faq';
import Footer from './component/Footer/Footer';

function App() {

  return (
    <>
      <NavbarMain menu={dataMenu}/>
      <HeroSection />
      <Service/>
      <WhyUs/>
      <CTA/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
