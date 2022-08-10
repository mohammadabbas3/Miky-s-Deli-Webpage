import React from "react";
import { useRef, useState, useEffect } from "react";


import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Cart from "../../pages/Cart";
import adminUser from "../../images/adminUser.png";
import { Container, Button } from "reactstrap";
import { Alert } from "reactstrap";
// import Alert from 'react-bootstrap/Alert';

import { IoIosCloseCircle } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Area from "../../pages/Area";
import { NavLink, Link } from "react-router-dom";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../../firebase.config";
// import Modal from '../../pages/Modal'

import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

import logo from "../../images/mikyslogo.png";
import "../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Menu",
    path: "/menu",
  },
  // {
  //   display: "Cart",
  //   path: "/cart",
  // },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  

  const autoFocusRef = useRef(null);

  const [{ user }, dispatch] = useStateValue();
  const [isLogoutMenu, setIsLogoutMenu] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+974 ");
  const [OTP, setOTP] = useState("");
  const [expandForm, setExpandForm] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  // const [otpContainer, setOtpContainer] = useState(false);

  const toggleAlert = () => setVisible(!visible);

  const firebaseAuth = getAuth(app);
  //  const provider = new GoogleAuthProvider();

  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 11) {
      setExpandForm(true);
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        },
        firebaseAuth
      );
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      console.log("enter phone number");
      alert("enter phone number");
      <Alert color="primary" isOpen={visible} toggle={toggleAlert}>
        Hey! Pay attention.
      </Alert>;
    }
  };

  const toggleModal = () => {
    // if(!user){
    //   try{
    //     const {user : { refreshToken, providerData }} = await signInWithPopup(firebaseAuth, provider)
    //     // console.log(response)
    //     dispatch({
    //       type: actionType.SET_USER,
    //       user: providerData[0]
    //     })
    //     localStorage.setItem('user', JSON.stringify(providerData[0]));
    //   }
    //     catch (error){
    //       console.log(error.message)
    //     }
    // }
    {
      !user && setIsLogoutMenu(!isLogoutMenu);
    }
  };

  const logout = () => {
    setIsLogoutMenu(false);
    setExpandForm(false);
    setPhoneNumber("+974 ");
    setOTP("");
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const verifyOTP = (e) => {
    let otp = e.target.value.replace(/[a-zA-Z<>,./!@#$%^&*()_"';:\|?/=-]/, "");
    // let otp = e.target.value;
    otp.length <= 6 && setOTP(otp);
    if (otp.length === 6) {
      // console.log(otp)
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          dispatch({
            type: actionType.SET_USER,
            user: user.providerData[0],
          });
          localStorage.setItem("user", JSON.stringify(user.providerData[0]));
          setIsLogoutMenu(false);
          alert("You are Signed In. Order Now!!");
          <Alert color="primary">You are Signed In Order Now!!</Alert>;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
        });
    }
  };

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center text-decoration-none gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right relative d-flex align-items-center gap-4">
            <span className="cart__icon">
              {/* <i className="ri-shopping-cart-2-fill" ></i> */}
              <IoCartSharp
                style={{ color: "#38383a", fontSize: "1.5rem" }}
                onClick={() => setCartMenu(!cartMenu)}
              />

              <span className="cart__badge">2</span>
            </span>

            <div className="signinBtn">
              {/* <div className='overlay'></div> */}
              {!user ? (
                <Button
                  style={{ display: "flex" }}
                  direction="row-responsive"
                  className="signin"
                  onClick={toggleModal}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  style={{ display: "flex" }}
                  direction="row-responsive"
                  className="signout"
                  onClick={logout}
                >
                  Sign Out
                </Button>
              )}
              {/* <Button style={{display:"flex"}} direction="row-responsive" className='signin' onClick= {toggleModal}>Sign In</Button> */}

              {isLogoutMenu && (
                <div className="overlay">
                  <div className="logoutMenu">
                    <motion.span
                      whileTap={{ scale: 0.5 }}
                      className="modal-close"
                      onClick={toggleModal}
                    >
                      <IoIosCloseCircle size="2rem" />
                    </motion.span>
                    <h3>Sign in to your account</h3>
                    <h5>with your mobile number</h5>
                    <div>
                      <form action="submit">
                        <div className="select-input-value">
                          <input
                            type="text"
                            requried="true"
                            pattern="[0-9]*"
                            placeholder="Mobile Number"
                            autoFocus
                            value={phoneNumber}
                            onChange={(e) => {
                              if (e.target.value === "+974 ") {
                                setExpandForm(false);
                              }

                              const experssion = e.target.value.replace(
                                /[a-zA-Z<>,./!@#$%^&*()_"';:\|?/=-]/,
                                ""
                              );

                              // setPhoneNumber(experssion)
                              {
                                e.target.value.length <= 13 &&
                                  setPhoneNumber(experssion);
                              }

                              console.log(phoneNumber);
                            }}
                          />
                        </div>

                        {expandForm === false && phoneNumber !== " " ? (
                          <button
                            className="next mt-4 text-center"
                            onClick={requestOTP}
                          >
                            Request OTP
                          </button>
                        ) : null}

                        {/* {expandForm === true &&  */}

                        <div className=" otpContainer mt-4 text-center">
                          Enter OTP
                          <input
                            type="text"
                            maxLength={8}
                            value={OTP}
                            ref={autoFocusRef}
                            // onChange={()=> {
                            //   autoFocusRef.current.focus()
                            //   verifyOTP()
                            // }}
                            onChange={verifyOTP}
                          />
                        </div>

                        <div id="recaptcha-container"></div>

                        {/* }  */}
                      </form>
                    </div>
                    {/* {user && user.phoneNumber === "+97430271700" && (
                      <div>
                        <Link to={"/createItem"}>
                          <button
                            className="mt-3 btn newItem"
                            onClick={toggleModal}
                          >
                            New Item{" "}
                            <span>
                              <MdAdd />
                            </span>
                          </button>
                        </Link>

                        <Link to="/admin">
                          <button
                            className="mt-3 btn newItem"
                            onClick={toggleModal}
                          >
                            Admin Panel{" "}
                            <span>
                              <MdAdd />
                            </span>
                          </button>
                        </Link>
                      </div>
                    )} */}

                    {expandForm === true && (
                      <Button
                        className="continue mt-4 text-center"
                        variant="danger"
                        type="submit"
                        onClick={toggleModal}
                      >
                        Continue <BsFillArrowRightCircleFill />{" "}
                      </Button>
                    )}
                    {/* <Button className="mt-4 text-center" onClick={logout}>
                      Sign Out
                    </Button> */}
                  </div>
                </div>
              )}
            </div>

            {/* admin panel */}
            {user && user.phoneNumber === "+97430271700" && (
              <span className="adminBtn">
                {/* Admin Panel{" "} */}
                <Link to="/admin">
                  <img src={adminUser} alt="Admin User" />
                </Link>
              </span>
            )}

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>

            {cartMenu && (
              <motion.div className="cartMenu">
                <Cart cartMenu={cartMenu} setCartMenu={setCartMenu} />
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
