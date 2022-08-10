import React from "react";
import { ListGroupItem } from "reactstrap";
import { IoCloseSharp } from "react-icons/io5";
import "../Components/styles/cartItem.css";
import Saffron from "../images/saffron-milkscake-min.jpg";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const CartItem = () => {
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={Saffron} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">Saffron Milk Cake</h6>
            <span className="cart__product-price ">QAR 37</span>
          </div>

          <div  className="cart__quantityContainer">
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <motion.div whileTap={{ scale: 0.75 }} className="decrease__btn">
                <BiMinus style={{ fontSize: "0.9rem" }} />
              </motion.div>
              <span className="quantity">1</span>
              <motion.div whileTap={{ scale: 0.75 }} className="increase__btn">
                <BiPlus style={{ fontSize: "0.9rem" }} />
              </motion.div>
            </div>
          </div>
          <IoCloseSharp style={{ fontSize: "0.9rem", color: "#df2020",cursor: "pointer" }} />
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
