import React, { useState, useEffect } from "react";
import HeroSection from "../component/HeroSection/HeroSection";
import Footer from "../component/Footer/Footer";
import {
  optionCategorySearchBar,
  optionPriceSearchBar,
  optionisRentedSearchBar,
  footerMenuLIst,
  socialMediaIcons,
} from "../helper/data";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import "./CarSearchAndResult.css";
import SearchBar from "../component/SearchBar/SearchBar";

const CarSearch = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [minprice, setminPrice] = useState("");
  const [maxprice, setmaxPrice] = useState("")
  const [category, setCategory] = useState("");
  const [isRented, setisRented] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&minprice=${minprice}&maxprice=${maxprice}&category=${category}&isRented=${isRented}`;

    axios.get(api).then((res) => {
      setData(res.data.cars);
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const selectedOption = e.target.value;

    const categoryMap = {
      "1": "small",
      "2": "medium",
      "3": "large",
    };

    const selectedCategory = categoryMap[selectedOption];

    setCategory(selectedCategory);
  };

  

  const handleisRentedChange = (e) => {
    const selectedOption = e.target.value;

    const isRentedMap = {
      "1": true,
      "2": false,
    };

    const selectedisRented = isRentedMap[selectedOption];

    setisRented(selectedisRented);
  };

  const redirect = (id) => {
    navigate(`/CarDetail/${id}`);
  };
  const handlePriceChange = (minPrice, maxPrice) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };
  const navigate = useNavigate();

  console.log(data);
  return (
    <>
      <div className="upper-section">
        <HeroSection showBtn={false} showHea={true} showPic={true} />
        <SearchBar
          optionCategory={optionCategorySearchBar}
          optionPrice={optionPriceSearchBar}
          optionisRented={optionisRentedSearchBar}
          changeName={handleNameChange}
          changePrice={handlePriceChange}
          changeCategory={handleCategoryChange}
          changeisRented={handleisRentedChange}
          clicked={getData}
        />
      </div>

<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {data.map((item) => (
          <Container
            id="restCont"
            key={item.id}
            style={{ width: "100%", maxWidth: "18rem" }}
          >
            <Card className="carCards" style={{ width: "333 px" }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "270 px", height: "160 px" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Harga: {item.price}</Card.Text>
                <Card.Text>
                  Status: {item.status ? "Sudah disewa" : "Belum disewa"}
                </Card.Text>
                <Button
                  onClick={() => redirect(item.id)}
                  variant="custom"
                  disabled={item.status}
                >
                  Sewa Mobil
                </Button>
              </Card.Body>
            </Card>
          </Container>
        ))}
      </div>
      <Footer menu={footerMenuLIst} icons={socialMediaIcons} />
    </>
  );
};

export default CarSearch;
