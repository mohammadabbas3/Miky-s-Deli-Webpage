import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Helmet from '../Components/Helmet'
import Category from '../Components/UI/Category';

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import '../Components/styles/hero-section.css';

import {GiChemicalDrop} from 'react-icons/gi';
import {SiLeaflet} from 'react-icons/si';
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import heroImg from "../images/hero-min1.jpg";
import dynamiteShrimp from "../images/dynamite-shrimp-min.jpg"
import familyTexMix from "../images/family-texmix-min.jpg"
import ribbonPotato from "../images/ribbon-potato-min.jpg"
import shrimpRice from "../images/risotto-shrimp-rice-min.jpg"
import veggieGrapeLeaves from "../images/veggie-grape-leaves-min.jpg"

import featureImg01 from '../images/service-01.png'
import featureImg02 from '../images/service-02.png'
import featureImg03 from '../images/service-03.png'



const sliderData = [
  {
    image: dynamiteShrimp
  },
  {
    image: familyTexMix
  },
  {
    image: ribbonPotato
  },
  {
    image: shrimpRice
  },
  {
    image: veggieGrapeLeaves
  },
  {
    image: heroImg
  }

]


const featureData = [
  {
    title: "Free Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Quick",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Gourmet",
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
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    };
  
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
                  Simple cusine with an array of homemade delicacies using the best seasonal products and mouth-watering selection of deli sandwiches and salads.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See Menu</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <GiChemicalDrop/>
                    </span>{" "}
                    No Perservatives
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <SiLeaflet/>
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
                {sliderData.map((slide, index) =>{
                  return (
                    <div className={index === currentSlide ? "slide current" : "slide"}
                    key={index}>
                      {index === currentSlide && (
                        
                        <img src={slide.image} alt="hero-img" />  
                        
                         
                      )}
                    </div>
                  )
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
              <h5 className="feature__subtitle mb-4">What we serve</h5>
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
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home