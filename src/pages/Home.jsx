import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../Components/Helmet";
import Category from "../Components/UI/Category";
import TestimonialSlider from "../Components/UI/TestimonialSlider";
import "../Components/styles/home.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../Components/styles/hero-section.css";

import { GiChemicalDrop } from "react-icons/gi";
import { SiLeaflet } from "react-icons/si";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import heroImg from "../images/hero-min1.jpg";
import dynamiteShrimp from "../images/dynamite-shrimp-min.jpg";
import familyTexMix from "../images/family-texmix-min.jpg";
import ribbonPotato from "../images/ribbon-potato-min.jpg";
import shrimpRice from "../images/risotto-shrimp-rice-min.jpg";
import veggieGrapeLeaves from "../images/veggie-grape-leaves-min.jpg";

import featureImg01 from "../images/quickDelivery.png";
import featureImg02 from "../images/24_7 icon.png";
import featureImg03 from "../images/cateringIcon.png";
import Menu from "./Menu";



const sliderData = [
  {
    image: dynamiteShrimp,
  },
  {
    image: familyTexMix,
  },
  {
    image: ribbonPotato,
  },
  {
    image: shrimpRice,
  },
  {
    image: veggieGrapeLeaves,
  },
  {
    image: heroImg,
  },
];

const featureData = [
  {
    title: "Free Delivery",
    imgUrl: featureImg01,
    desc: "Enjoy our free, quick and safe delivery.Delivering our handmade deliciousness with our hands safely.",
  },

  {
    title: "Available 24/7",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  // {
  //   title: "Gourmet",
  //   imgUrl: featureImg03,
  //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  // },
  {
    title: "Catering Services",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  //   console.log("prev");
  // };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> Food at
                  <span> your door !!</span>
                </h1>

                <p>
                  Simple cusine with an array of homemade delicacies using the
                  best seasonal products and mouth-watering selection of deli
                  sandwiches and salads.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/menu">
                      Order now{" "}
                      <MdKeyboardArrowRight
                        style={{
                          fontSize: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                    </Link>
                  </button>

                  {/* <button className="all__foods-btn">
                    <Link to="/foods">See Menu</Link>
                  </button> */}
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <GiChemicalDrop />
                    </span>{" "}
                    No Perservatives
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <SiLeaflet />
                    </span>{" "}
                    100% Fresh and Clean
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="slider">
                {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}
                {sliderData.map((slide, index) => {
                  return (
                    <div
                      className={
                        index === currentSlide ? "slide current" : "slide"
                      }
                      key={index}
                    >
                      {index === currentSlide && (
                        <img src={slide.image} alt="hero-img" />
                      )}
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Services we offer</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <a href="https://wa.me/97455251120">
                    <motion.img
                     whileHover={{ scale: 1.2 }}
                      src={item.imgUrl}
                      alt="feature-img"
                      className="icon w-25 mb-3"
                    /></a>
                    <h5 className=" fw-bold mb-3">{item.title}</h5>{" "}
                  
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* <section> */} <Menu />
      {/* </section> */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <form className="form">
                <h2>
                  Share your <span>Experience</span> with us
                </h2>

                <label>Name</label>
                <input
                  placeholder="Name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                  placeholder="Email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />

                <label>Message</label>
                <textarea
                  placeholder="Message"
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button
                  type="submit"
                  // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Map</h2>
            </Col>

            <Col lg="12">
              <div className="map w-100"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
