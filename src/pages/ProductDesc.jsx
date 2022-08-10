import React from "react";
import "../Components/styles/productDesc.css";
import { Container, Row, Col, Button } from "reactstrap";
import Saffron from "../images/saffron-milkscake-min.jpg";
import { motion } from "framer-motion";
import { SiCachet } from "react-icons/si";

const ProductDesc = () => {
  return (
    <section>
      <Container style={{ marginTop: "5rem" }} className="">
        <Row>
          <Col md="6">
            <div className="imgContainer">
              {/* <h5>image</h5> */}
              <img src={Saffron} />
            </div>
          </Col>
          <Col md="6">
            <div className="descModalContainer">
              <div className="descHeader">
                <h5>Saffron Milk Cake</h5>
              </div>
              <div className="descriptionModal">
                <p>
                  Item Description <br /> Mini Pancakes topped with
                  deliciousness of Kinder chocolate and Kinder chocolate bar.
                </p>
                <p>
                  Item Description <br /> Mini Pancakes topped with
                  deliciousness of Kinder chocolate and Kinder chocolate bar.
                </p>
                <p>
                  Item Description <br /> Mini Pancakes topped with
                  deliciousness of Kinder chocolate and Kinder chocolate bar.
                </p>
                <p>
                  Item Description <br /> Mini Pancakes topped with
                  deliciousness of Kinder chocolate and Kinder chocolate bar.
                </p>
              </div>
              <div className="descrptionFooter d-flex align-items-center justify-content-center">
              <div className="descFooter d-flex align-items-center justify-content-between">
                <span className="decrease__btn">
                  <i class="ri-subtract-line"></i>
                </span>
                <span className="quantity">{1}</span>
                <span className="increase__btn">
                  <i class="ri-add-line"></i>
                </span>
              </div>
              
              
              <motion.button  whileTap={{ scale: 0.9 }} type="button" className=" descBtn btn btn-success">Add to Order QAR 27</motion.button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDesc;
