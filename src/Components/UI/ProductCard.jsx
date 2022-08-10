import React, { useState } from "react";
import "../styles/productCard.css";
import Saffron from "../../images/saffron-milkscake-min.jpg";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProductCard = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="card mb-4" style={{ width: "15rem" }}>
      <img className="card-img-top mt-2" src={Saffron} alt="product image" />
      <div className="card-body">
        <h5 className="card-title">Miky's Special Pizza</h5>
        <p className="card-text">
          Mini Pancakes topped with Kinder chocolate and Kinder chocolate bar.
        </p>
        <div className="product__details d-flex align-items-center justify-content-between ">
          <span className="product__price">QAR 76</span>
          {/* <Link to="/productDesc"> */}
          <motion.a
            whileTap={{ scale: 0.8 }}
            onClick={toggle}
            className="btn btn-primary"
          >
            Add to Cart
          </motion.a>
          {/* </Link> */}

          <Modal size="lg" isOpen={modal} toggle={toggle}>
            <ModalHeader className="modalHeader" toggle={toggle}>
              Saffron Milk Cake
            </ModalHeader>
            <ModalBody className="modalBody">
              <Container>
                <Row>
                  <Col md="6">
                    <div className="imgContainer">
                      
                      <img src={Saffron} />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="descContainer">
                      
                      <div className="description">
                        <p>
                          Item Description <br /> Mini Pancakes topped with
                          deliciousness of Kinder chocolate and Kinder chocolate
                          bar.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              
            </ModalBody>
            <ModalFooter>
              

              <div className="descrptionFooter d-flex align-items-center justify-content-center">
                <div className="increase-decrease-btns d-flex align-items-center justify-content-between">
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    className="decrease__btn"
                  >
                    <i class="ri-subtract-line"></i>
                  </motion.button>
                  <span className="quantity">{1}</span>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    className="increase__btn"
                  >
                    <i class="ri-add-line"></i>
                  </motion.button>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className=" descBtn btn btn-success"
                >
                  Add to Order QAR 27
                </motion.button>
              </div>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
