import React, { useState } from "react";
import Helmet from "../Components/Helmet";
import { Container, Row, Col, Button, Form } from "reactstrap";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import "../Components/styles/checkout.css";
import { Modal, ModalBody } from "reactstrap";
import TickImg from "../images/tick.png";
import Area from "../pages/Area"


const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNo, setBuildingNo] = useState("");
  const [{ user }] = useStateValue();
  const [modalConfirm, setModalConfirm] = useState(false);

  const toggleConfirm = () => setModalConfirm(!modalConfirm);

  return (
    <Helmet title="Checkout">
      <section>
        <container>
          <p>image goes here</p>
          <img src="" />
        </container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="10" md="8">
              <h3 className="text-center mb-4">Checkout & Payment</h3>
              <Form className="checkout__form">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control custom-input mt-2"
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="form-control custom-input mt-2"
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="text"
                    // {user ? (placeholder={user.uid}) : (placeholder="Enter Phone Number")}
                    placeholder={user.phoneNumber}
                    // disabled
                    // className="form-control custom-input mt-2"
                    value=""
                    // onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                

                <h4 className="mt-4 mb-4">Add Address</h4>
                <label class="input-label bold mb-0">Pin Exact Location</label>
                <div>Map</div>
                <Button>Add your current location</Button>

                <div className="form__group">
                  <div className=" my-4 deliveryZone">
                    <h2>Delivery Zone</h2>
                    <button className="btnArea" onClick={<Area/>}><IoMdArrowDropdown/></button>
                    
                  </div>
                </div>
                <div class="form-group mb-4">
                  <label class="input-label bold mb-0">
                    Street No. <span class="text-danger">*</span>
                  </label>
                  <input
                    name="address_2"
                    type="text"
                    required=""
                    class="form-control custom-input mt-2"
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="input-label bold mb-0">
                    Building/Villa No. <span class="text-danger">*</span>
                  </label>
                  <input
                    name="address_1"
                    type="text"
                    required=""
                    className="form-control custom-input mt-2"
                    onChange={(e) => setBuildingNo(e.target.value)}
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="input-label bold mb-0">
                    Floor/Flat No. <span>(Optional)</span>
                  </label>
                  <input
                    name="address_3"
                    type="text"
                    className="form-control custom-input mt-2"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="input-label bold mb-0">
                    Nearest Landmark <span>(Optional)</span>
                  </label>
                  <input
                    name="address_4"
                    type="text"
                    className="form-control custom-input mt-2"
                  />
                </div>

                {/*--------- payment ------ */}
                <div className="paymentSection">
                  <h4>Payment Options</h4>
                  <div className="form-check mb-4 mt-4 mx-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Cash On Delivery / Wireless payment
                    </label>
                  </div>
                  <div className="form-check mb-4 mt-4 mx-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDisabled"
                      id="flexRadioDisabled"
                      disabled
                    />
                    <label className="form-check-label" for="flexRadioDisabled">
                      Credit/Debit Card
                    </label>
                  </div>
                </div>

                {/* action buttons */}

                <div class="step-actions text-center">
                  <Link to="/menu">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      class="button btn btn-outline-primary mx-1"
                    >
                      Back
                    </motion.button>
                  </Link>

                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    class="button btn btn-primary mx-1"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleConfirm();
                    }}
                    disabled={
                      enterName === "" ||
                      enterEmail === "" ||
                      street === "" ||
                      buildingNo === ""
                        ? true
                        : false
                    }
                  >
                    Confirm Order
                  </motion.button>

                  <Modal
                    className="checkout__modal"
                    isOpen={modalConfirm}
                    toggle={toggleConfirm}
                  >
                    <ModalBody className="checkout__modal-content text-center">
                      <img src={TickImg} alt=" Green Tick" />
                      <h2>Thank You!</h2>
                      <p>Your order is Comfirmed</p>
                      {/* <Button
                        className="checkout__modal-btn"
                        color="primary"
                        onClick={toggleConfirm}
                      >
                        OK
                      </Button>{" "} */}
                    </ModalBody>
                  </Modal>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
