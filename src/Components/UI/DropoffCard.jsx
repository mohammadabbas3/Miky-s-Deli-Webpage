import React, { useState } from "react";
import {
  Row,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { motion } from "framer-motion";
import Barista from "../../images/barista.png";
// import Server from "../../images/server.png";
// import StopWatch from "../../images/stopwatch.png";
import Location from "../../images/location.png";
import BookNow from "../../images/bookNow.png";
import BulletArrow from "../../images/bulletarrow.png";
// import FemaleServer from "../../images/femaleServer.png";

import { IoCloseOutline } from "react-icons/io5";
import { BiMinus, BiPlus } from "react-icons/bi";
// import Barista from "../../images/barista.png";
import image from "../../images/crispy-sandwiches.png";
import { FaClock } from "react-icons/fa";

const DropoffCard = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [cateringModalInfo, setCateringModalInfo] = useState([]);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );
  return (
    <>
      {data &&
        data?.map((item) => (
          <div>
            <div className="article__postcard">
              <article
                key={item.id}
                className="postcard light red"
                onClick={() => {
                  toggle();
                  setCateringModalInfo(item);
                }}
              >
                <img
                  className="postcard__img"
                  src={image}
                  onClick={toggle}
                  alt="Image Title"
                />

                <div className="postcard__text">
                  <div className="d-flex justify-content-between">
                    <h1 className="postcard__title green m-2" onClick={toggle}>
                      {item.title}
                    </h1>
                    <motion.span whileTap={{ scale: 0.5 }}>
                      <img src={BookNow} alt="bookNow icon" onClick={toggle} />
                    </motion.span>
                  </div>
                  <div
                    className="postcard__subtitle small m-2"
                    style={{ color: "#139652" }}
                  >
                    <b>{item.category}</b>
                  </div>

                  <div className="postcard__subtitle small">
                    {item.arabicTitle}
                  </div>
                  <div className="postcard__bar" />

                  <div>
                    {item.descriptions?.map((i) => (
                      <div className="postcard__preview-txt">{i}</div>
                    ))}
                  </div>
                  <ul className="postcard__tagbox">
                    {item.highlights?.map((eachHighlight) => (
                      <li className="tag__item highlight">
                        <span>{eachHighlight}</span>
                      </li>
                    ))}

                    {item.location === "Doha Only" && (
                      <li className="tag__item notice d-flex justify-content-between">
                        <img src={Location} alt="Location Icon" />
                        <strong>{item.location}</strong>
                      </li>
                    )}

                    <li className="tag__item play green" onClick={toggle}>
                      <span>QAR {item.price}</span>
                    </li>
                  </ul>
                </div>
                <Modal
                  isOpen={modal}
                  size="xl"
                  toggle={toggle}
                  className="catering-modal"
                  style={{ cursor: "pointer" }}
                >
                  <ModalHeader
                    className="border-0"
                    toggle={toggle}
                    close={closeBtn}
                  >
                    <div>
                      <h5 className="catering-modal-title">
                        {cateringModalInfo.title}
                      </h5>
                      <small style={{ color: "#139652", fontSize: "14px" }}>
                        {cateringModalInfo.category}
                      </small>
                    </div>
                  </ModalHeader>
                  <ModalBody className="catering-modal-body pt-0">
                    <div className="instruction mb-2">
                      <div className="row">
                        <div className="col-md-12">
                          {cateringModalInfo.foodTypes && (
                            <div className="catering-modal-drinks m-2">
                              <strong>Drinks</strong>
                              {cateringModalInfo.foodTypes?.map(
                                (foodType) => (
                                  // drink.hotDrinks?.map((hotDrink) => (
                                  <ul>
                                    <li>
                                      <span>{foodType}</span>
                                    </li>
                                  </ul>
                                )
                                // ))
                              )}
                            </div>
                          )}

                          {cateringModalInfo.drinkFlavours && (
                            <div className="catering-modal-drinks m-2">
                              <strong>Drinks</strong>
                              {cateringModalInfo.drinkFlavours?.map(
                                (drinkFlavour) => (
                                  // drink.hotDrinks?.map((hotDrink) => (
                                  <ul>
                                    <li>
                                      <span>{drinkFlavour}</span>
                                    </li>
                                  </ul>
                                )
                                // ))
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="catering-modal-options">
                      <div className="options-heading d-flex">
                        <h5>Options</h5>
                      </div>
                      <div className="options-choices">
                        {cateringModalInfo.variations?.map(
                          (variant) =>
                            variant.pastaTypes && (
                              <div className="catering-modal-pastaTypes">
                                <div className="mb-4">
                                  <strong>Pasta Types</strong>
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      margin: "1rem",
                                    }}
                                  >
                                    (select 2 choices)
                                  </span>
                                </div>
                                {cateringModalInfo.variations?.map((variant) =>
                                  variant.pastaTypes?.map((eachType) => (
                                    <ul>
                                      <li className="d-flex justify-content-between">
                                        <span>{eachType}</span>
                                        <div className="counter d-flex">
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="minusBtn"
                                            // onClick={(e)=> {e.preventDefault()}}
                                          >
                                            <BiMinus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                          {/* <div className="counterQuantity">1</div> */}
                                          <input
                                            class="counterQuantity"
                                            name="product-qty"
                                            min="0"
                                            max="10"
                                            value="0"
                                          />
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="plusBtn"
                                            // onClick={()=> {e.preventDefault()}}
                                          >
                                            <BiPlus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                        </div>
                                      </li>
                                    </ul>
                                  ))
                                )}

                                <div className="mb-4">
                                  <strong>Choose one of</strong>
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      margin: "1rem",
                                    }}
                                  >
                                    (select 1 choices)
                                  </span>
                                </div>
                                {cateringModalInfo.variations?.map((variant) =>
                                  variant.meatChoices?.map((eachChoice) => (
                                    <ul>
                                      <li className="d-flex justify-content-between">
                                        <span>{eachChoice}</span>
                                        <div className="counter d-flex">
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="minusBtn"
                                            // onClick={(e)=> {e.preventDefault()}}
                                          >
                                            <BiMinus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                          {/* <div className="counterQuantity">1</div> */}
                                          <input
                                            class="counterQuantity"
                                            name="product-qty"
                                            min="0"
                                            max="10"
                                            value="0"
                                          />
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="plusBtn"
                                            // onClick={()=> {e.preventDefault()}}
                                          >
                                            <BiPlus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                        </div>
                                      </li>
                                    </ul>
                                  ))
                                )}
                              </div>
                            )
                        )}

                        {cateringModalInfo.variations?.map(
                          (variant) =>
                            variant.burgerOptions && (
                              <div className="catering-modal-pastaTypes">
                                <div className="mb-4">
                                  <strong>Burger Choices</strong>
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      margin: "1rem",
                                    }}
                                  >
                                    (select 10 choices)
                                  </span>
                                </div>
                                {cateringModalInfo.variations?.map((variant) =>
                                  variant.burgerOptions?.map((eachType) => (
                                    <ul>
                                      <li className="d-flex justify-content-between">
                                        <span>{eachType}</span>
                                        <div className="counter d-flex">
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="minusBtn"
                                            // onClick={(e)=> {e.preventDefault()}}
                                          >
                                            <BiMinus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                          {/* <div className="counterQuantity">1</div> */}
                                          <input
                                            class="counterQuantity"
                                            name="product-qty"
                                            min="0"
                                            max="10"
                                            value="0"
                                          />
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="plusBtn"
                                            // onClick={()=> {e.preventDefault()}}
                                          >
                                            <BiPlus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                        </div>
                                      </li>
                                    </ul>
                                  ))
                                )}
                              </div>
                            )
                        )}

                        {cateringModalInfo.variations?.map(
                          (variant) =>
                            variant.pizzaTypes && (
                              <div className="catering-modal-pastaTypes">
                                <div className="mb-4">
                                  <strong>Pizza Types</strong>
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      margin: "1rem",
                                    }}
                                  >
                                    (select 10 choices)
                                  </span>
                                </div>
                                {cateringModalInfo.variations?.map((variant) =>
                                  variant.pizzaTypes?.map((eachType) => (
                                    <ul>
                                      <li className="d-flex justify-content-between">
                                        <span>{eachType}</span>
                                        <div className="counter d-flex">
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="minusBtn"
                                            // onClick={(e)=> {e.preventDefault()}}
                                          >
                                            <BiMinus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                          {/* <div className="counterQuantity">1</div> */}
                                          <input
                                            class="counterQuantity"
                                            name="product-qty"
                                            min="0"
                                            max="10"
                                            value="0"
                                          />
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="plusBtn"
                                            // onClick={()=> {e.preventDefault()}}
                                          >
                                            <BiPlus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                        </div>
                                      </li>
                                    </ul>
                                  ))
                                )}
                              </div>
                            )
                        )}

                        {cateringModalInfo.variations?.map(
                          (variant) =>
                            variant.riceTypes && (
                              <div className="catering-modal-pastaTypes">
                                <div className="mb-4">
                                  <strong>Rice Choices</strong>
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      margin: "1rem",
                                    }}
                                  >
                                    (select 30 choices)
                                  </span>
                                </div>
                                {cateringModalInfo.variations?.map((variant) =>
                                  variant.riceTypes?.map((eachType) => (
                                    <ul>
                                      <li className="d-flex justify-content-between">
                                        <span>{eachType}</span>
                                        <div className="counter d-flex">
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="minusBtn"
                                            // onClick={(e)=> {e.preventDefault()}}
                                          >
                                            <BiMinus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                          {/* <div className="counterQuantity">1</div> */}
                                          <input
                                            class="counterQuantity"
                                            name="product-qty"
                                            min="0"
                                            max="10"
                                            value="0"
                                          />
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="plusBtn"
                                            // onClick={()=> {e.preventDefault()}}
                                          >
                                            <BiPlus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                        </div>
                                      </li>
                                    </ul>
                                  ))
                                )}
                              </div>
                            )
                        )}
                      </div>
                    </div>

                    {/* Addons Section */}
                    <div className="catering-modal-addons">
                      {cateringModalInfo.variations?.map(
                        (variant) =>
                          variant.addOns && (
                            <div className="addons-heading d-flex">
                              <h5>
                                Addons{" "}
                                <span
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  (Add plates per tray)
                                </span>{" "}
                              </h5>
                            </div>
                          )
                      )}
                      <div className="addons-choices">
                        {cateringModalInfo.variations?.map((variant) =>
                          variant.addOns?.map((eachAddon) => (
                            <ul>
                              <li className="d-flex justify-content-between">
                                <div className="d-flex flex-column">
                                  <span>{eachAddon.addOn}</span>
                                  <small
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "500",
                                      color: "#9196AA",
                                    }}
                                  >
                                    <BiPlus />
                                    {eachAddon.price}QAR
                                  </small>
                                </div>

                                <div className="counter d-flex">
                                  <motion.button
                                    whileTap={{ scale: 0.5 }}
                                    className="minusBtn"
                                    // onClick={(e)=> {e.preventDefault()}}
                                  >
                                    <BiMinus style={{ fontSize: "1rem" }} />
                                  </motion.button>
                                  {/* <div className="counterQuantity">1</div> */}
                                  <input
                                    class="counterQuantity"
                                    name="product-qty"
                                    min="0"
                                    max="10"
                                    value="0"
                                  />
                                  <motion.button
                                    whileTap={{ scale: 0.5 }}
                                    className="plusBtn"
                                    // onClick={()=> {e.preventDefault()}}
                                  >
                                    <BiPlus style={{ fontSize: "1rem" }} />
                                  </motion.button>
                                </div>
                              </li>
                            </ul>
                          ))
                        )}
                        {cateringModalInfo.variations?.map(
                          (variant) =>
                            variant.drinkAddons && (
                              <div className="catering-modal-pastaTypes mt-4">
                                <div className="mb-4">
                                  <h6 style={{ color: "#139652" }}>
                                    Reb Bull with Falvours
                                  </h6>
                                </div>
                                {cateringModalInfo.variations?.map((variant) =>
                                  variant.drinkAddons?.map((eachAddon) => (
                                    <ul>
                                      <li className="d-flex justify-content-between">
                                        <div className="d-flex flex-column">
                                          <span>{eachAddon.drinkAddon}</span>
                                          <small
                                            style={{
                                              fontSize: "1rem",
                                              fontWeight: "500",
                                              color: "#9196AA",
                                            }}
                                          >
                                            <BiPlus />
                                            {eachAddon.price}QAR
                                          </small>
                                        </div>

                                        <div className="counter d-flex">
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="minusBtn"
                                            // onClick={(e)=> {e.preventDefault()}}
                                          >
                                            <BiMinus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                          {/* <div className="counterQuantity">1</div> */}
                                          <input
                                            class="counterQuantity"
                                            name="product-qty"
                                            min="0"
                                            max="10"
                                            value="0"
                                          />
                                          <motion.button
                                            whileTap={{ scale: 0.5 }}
                                            className="plusBtn"
                                            // onClick={()=> {e.preventDefault()}}
                                          >
                                            <BiPlus
                                              style={{ fontSize: "1rem" }}
                                            />
                                          </motion.button>
                                        </div>
                                      </li>
                                    </ul>
                                  ))
                                )}
                              </div>
                            )
                        )}
                      </div>
                    </div>

                    <ModalFooter className="catering-modal-footer d-flex justify-content-around border-0 text-center">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className="booknowBtn"
                        data-dismiss="modal"
                      >
                        <span>Book Now</span>
                        <span>QAR {cateringModalInfo.price}</span>
                      </motion.button>
                    </ModalFooter>
                  </ModalBody>
                </Modal>
              </article>
            </div>
          </div>
        ))}
    </>
  );
};

export default DropoffCard;
