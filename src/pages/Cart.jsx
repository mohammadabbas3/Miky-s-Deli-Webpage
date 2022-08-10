// import React from "react";
// import "../Components/styles/cart.css";
// import { motion } from "framer-motion";
// import { MdOutlineKeyboardTab } from "react-icons/md";
// import { RiRefreshFill } from "react-icons/ri";
// import { BiMinus, BiPlus } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { useStateValue } from "../context/StateProvider";
// import CartItem from "../pages/CartItem.jsx";
// import { ListGroup } from "reactstrap";

// const Cart = ({ cartMenu, setCartMenu }) => {
//   const [{ user }] = useStateValue();

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 200 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 200 }}
//       className="cartContainer"
//     >
//       <div className="cartHeader">
//         <motion.div whileTap={{ scale: 0.75 }}>
//           <MdOutlineKeyboardTab
//             style={{ fontSize: "1.5rem", color: "#686868" }}
//             onClick={() => setCartMenu(false)}
//           />
//         </motion.div>
//         <h6 className="cartTitle">Cart</h6>
//         <motion.p whileTap={{ scale: 0.75 }} className="clearBtn">
//           Clear <RiRefreshFill />{" "}
//         </motion.p>
//       </div>

//       {/* -----bottom section----- */}
//       <div className="cartSection">
//         <ListGroup className="cartItemsContainer">
//           {/* cart Item */}
//           <div className="cartItem">
//             {/* name Section */}
//             <div className="cartItemName">
//               <p>Miky's Special Pizza</p>
//               <p className="cartItemAmount"> QAR 20</p>
//             </div>

//             {/* button section */}
//             <div className="cartItemBtns">
//               <motion.div className="btn" whileTap={{ scale: 0.75 }}>
//                 <BiMinus style={{ color: "#ffff" }} />
//               </motion.div>
//               <p className="cartItemQty">1</p>
//               <motion.div className="btn" whileTap={{ scale: 0.75 }}>
//                 <BiPlus style={{ color: "#ffff" }} />
//               </motion.div>
//             </div>
//           </div>

//           <CartItem/>
//           <CartItem/>
//           <CartItem/>
//           <CartItem/>
//           <CartItem/>

//         </ListGroup>
//         {/* cart total */}

// <div className="cartTotalContainer">
//   <div className="cartSubTotal">
//     <p>Sub Total</p>
//     <p>QAR 30</p>
//   </div>
//   <div className="cartSubTotal">
//     <p>Delivery</p>
//     <p>QAR 7</p>
//   </div>
//   <div className="divider"></div>
//   <div className="cartTotal">
//     <p>Total</p>
//     <p>QAR 37</p>
//   </div>

//   {user ? (<motion.button
//     type="button"
//     whileTap={{ scale: 0.8 }}
//     className="checkoutBtn"
//     onClick={() => setCartMenu(false)}
//   >
//     <Link to="/checkout"> Check Out</Link>
//   </motion.button>) : (<motion.button
//     type="button"
//     whileTap={{ scale: 0.8 }}
//     className="checkoutBtn"
//     onClick={() => setCartMenu(false)}
//   >
//     <Link to="/"> Sign In to Check Out</Link>
//   </motion.button>)}

// </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Cart;

import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "../pages/CartItem";
import "../Components/styles/cart.css";
import { motion } from "framer-motion";
import { MdOutlineKeyboardTab } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { useStateValue } from "../context/StateProvider";

const Cart = ({ cartMenu, setCartMenu }) => {
  const [{ user }] = useStateValue();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="cart__container"
    >
      <ListGroup className="cart">
        <div className="cartHeader">
          <motion.div whileTap={{ scale: 0.75 }}>
            <MdOutlineKeyboardTab
              style={{ fontSize: "1.5rem", color: "#686868" }}
              onClick={() => setCartMenu(false)}
            />
          </motion.div>
          <h6 className="cartTitle">Your Cart</h6>
          <motion.p whileTap={{ scale: 0.75 }} className="clearBtn">
            Clear <RiRefreshFill />{" "}
          </motion.p>
        </div>

        <div className="cart__item-list">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="cartTotalContainer">
          <div className="cartSubTotal">
            <p>Sub Total</p>
            <p>QAR 30</p>
          </div>
          <div className="cartSubTotal">
            <p>Delivery</p>
            <p>QAR 7</p>
          </div>
          <div className="divider"></div>
          <div className="cartTotal">
            <p>Total</p>
            <p>QAR 37</p>
          </div>

          {user ? (
            <motion.button
              type="button"
              whileTap={{ scale: 0.8 }}
              className="checkoutBtn"
              onClick={() => setCartMenu(false)}
            >
              <Link to="/checkout"> Check Out</Link>
            </motion.button>
          ) : (
            <motion.button
              type="button"
              whileTap={{ scale: 0.8 }}
              className="checkoutBtn"
              onClick={() => setCartMenu(false)}
            >
              <Link to="/"> Sign In to Check Out</Link>
            </motion.button>
          )}
        </div>

        {/* <div className="cart__bottom d-flex align-items-center justify-content-between">
          <p>Sub Total</p>
          <p>QAR 30</p>

          <h6>
            Delivery: <span>QAR 0</span>
          </h6>
          <h6>
            Subtotal : <span>QAR 37</span>
          </h6>

          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div> */}
      </ListGroup>
    </motion.div>
  );
};

export default Cart;
