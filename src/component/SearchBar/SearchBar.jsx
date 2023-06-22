import React from "react";
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SearchBar.css";




const SearchBar = ({optionCategory, optionPrice, optionStatus}) => {
  return (
    <Container className="searchbar-container">
      {/* <Row className="searchbar-title">
        <p>Pencarianmu</p>
      </Row> */}
      <Row className="searchbar-form">
        <Col className="searchbar-child">
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form-label" >Nama Mobil</Form.Label>
              <Form.Control type="text" placeholder="Innova" />
            </Form.Group>
          </div>
        </Col>
        <Col className="searchbar-child">
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form-label">Kategori</Form.Label>
              <Form.Select aria-label="Default select example" >
                <option className="form-option">Masukan Kapasitas Mobil</option>
                {optionCategory.map((opt) => (
                  <option value={opt.value}>{opt.category}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </Col>
        <Col className="searchbar-child">
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form-label">Harga</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Masukan Harga Sewa per Hari</option>
                {optionPrice.map((opt) => (
                  <option value={opt.value}>{opt.price}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </Col>
        <Col className="searchbar-child searchbar-and-button">
          <div>
            <div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="form-label">Status</Form.Label>
                <Form.Select aria-label="Default select example">
                  {optionStatus.map((opt) => (
                    <option value={opt.value}>{opt.status}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            {/* <div><Button variant="success">Cari Mobil</Button>{' '}</div> */}
          </div>
        </Col>
        <Col className="searchbar-button">
          {/* <Link to={"CarDetail"}> */}
            {" "}
            <Button variant="success" >Cari Mobil</Button>{" "}
          {/* </Link> */}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
