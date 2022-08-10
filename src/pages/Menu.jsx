import React, { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import "../Components/styles/menu.css";
import Helmet from "../Components/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Alert } from "reactstrap";
import Slider from "react-slick";
import ProductCard from "../Components/UI/ProductCard";
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";


const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsFillArrowLeftCircleFill style={{ color: "#fff", fontSize: "20px", position:"absolute",left:"30",top:"2" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsFillArrowRightCircleFill style={{ color: "#fff", fontSize: "20px",position:"absolute", right:"30" }} />
    </div>
  );
};

const settings = {
  dots: true,
  focusOnSelect: true,
  infinite: false,
  speed: 500,
  swipeToSlide: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  prevArrow:<PreviousBtn />,
  nextArrow:<NextBtn />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
  ],
};

const Menu = () => {
  // const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const clearInput = () => {
    // setFilteredData([]);
    setWordEntered("");
  };

  const alert = () => {
    <div>
      <Alert color="primary" >
        This is a primary alert — check it out!
      </Alert>
    </div>;

    console.log("alert");
  };

  return (
    <Helmet title="Menu">
      {/* <section></section> */}
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Our Menu</h2>
          </Col>
          <Col lg="14">
            <div className="menuCategory__carousel">
              <Slider
                {...settings}
                className="menu__category d-flex align-items-center justify-content-center "
              >
                <div>
                  <button>Breakfast</button>
                </div>

                <div>
                  <button>Starter</button>
                </div>
                <div>
                  <button>Salad</button>
                </div>
                <div>
                  <button>Soups</button>
                </div>
                <div>
                  <button>Sandwich</button>
                </div>
                <div>
                  <button className="menuBtnActive">Pasta</button>
                </div>
                <div>
                  <button>Pizza</button>
                </div>
                <div>
                  <button>Quesadilla</button>
                </div>
                <div>
                  <button>Burgers</button>
                </div>
                {/* <div><button>Rice</button></div> */}
                <div>
                  <button>Main Course</button>
                </div>
                <div>
                  <button>Dessert</button>
                </div>
                {/* <div><button>Fresh Juices</button></div> */}
                <div>
                  <button>Drinks</button>
                </div>
                {/* <div><button>Smoothies</button></div> */}
                <div>
                  <button>Cold Coffee</button>
                </div>
                <div>
                  <button>Hot Coffee</button>
                </div>
                <div>
                  <button>Hot Tea</button>
                </div>
                {/* <div><button>MilkShakes</button></div> */}
                {/* <div><button>Ice Cream</button></div> */}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={wordEntered}
                  onChange={(e) => setWordEntered(e.target.value)}
                />
                <span>
                  {wordEntered.length === 0 ? (
                    <MdSearch size={23} style={{ color: "#139652" }} />
                  ) : (
                    <MdClose
                      size={23}
                      style={{ color: " #df2020" }}
                      onClick={clearInput}
                    />
                  )}
                </span>
              </div>

              <button onClick={alert}>click me </button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section> */}
      <Container className="d-flex flex-wrap">
        <Row lg="6" md="4" sm="6" xs="6" className="mb-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </Container>
      {/* </section> */}
    </Helmet>
  );
};

export default Menu;
