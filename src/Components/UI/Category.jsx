import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../images/pizza.png";
import categoryImg02 from "../../images/pasta.png";
import categoryImg03 from "../../images/sandwich.png";
import categoryImg04 from "../../images/appetizer.png";

import "../styles/category.css";

const categoryData = [
  {
    display: "Pizza",
    imgUrl: categoryImg01,
  },
  {
    display: "Pasta",
    imgUrl: categoryImg02,
  },

  {
    display: "Sandwiches",
    imgUrl: categoryImg03,
  },

  {
    display: "Appetizers",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        <h5 className="text-center mb-4">Our Speciality</h5>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
