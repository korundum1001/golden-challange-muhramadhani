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
import SearchBar from "../component/SearchBar/SearchBar";

const CarSearch = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {getData()},[]);

  const getData = () => {
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&price=${price}&category=${category}`;

    axios
      .get(api)
      .then((res) => {setData(res.data.cars)})
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  // };

  // const handlePriceChange = (e) => {
  //   setP

    console.log(data)
  return (
    <>
      <div className="upper-section">
        <HeroSection showBtn={false} showHea={true} showPic={true}/>
        <SearchBar
          optionCategory={optionCategorySearchBar}
          optionPrice={optionPriceSearchBar}
          optionStatus={optionStatusSearchBar}
        />
      </div>

      {data.map(item => (
        <div>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
          <p>{item.price}</p>
        </div>
      ))}
      <Footer menu={footerMenuLIst} icons={socialMediaIcons} />
    </>
  );
};

export default CarSearch;
