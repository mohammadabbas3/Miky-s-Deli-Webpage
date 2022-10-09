// import React, { useState } from "react";
// import "../styles/cateringCard.css";
// import { Button,Container, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import image from "../../images/crispy-sandwiches.png";

// const CateringCard = ({ item }) => {
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);
//   const closeBtn = (
//     <button className="close" onClick={toggle} type="button">
//       &times;
//     </button>
//   );
//   return (
//     <>
//      <Container className="d-flex justify-content-center w-100">
//       <div className="catering__card mb-4 d-flex flex-row shadow-lg p-0" style={{ width: "50rem" }}>
//         <img src={image} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{item.title}</h5>
//           <p className="card-text">{item.cateringMenuDescription}</p>
//           <Button color="danger" onClick={toggle}>
//             Click Me
//           </Button>
//           <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle} close={closeBtn}>
//           Modal title
//         </ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//       </Modal>
//         </div>
//       </div>
//       </Container>
//     </>
//   );
// };

// export default CateringCard;

import React, { useState } from "react";
import "../styles/cateringCard.css";
import {
  Row,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Barista from "../../images/barista.png";
import image from "../../images/crispy-sandwiches.png";
import { FaClock } from "react-icons/fa";

const CateringCard = ({ item }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div className="article__postcard">
      <article className="postcard light green">
        <img className="postcard__img" src={image} alt="Image Title" />

        <div className="postcard__text">
          <h1 className="postcard__title green">{item.title}</h1>
          <div className="postcard__subtitle small">{item.arabicTittle}</div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
            {item.cateringMenuDescription}
            {"\n"}
            {item.cateringMenuArabicDescription}
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <img
                src={Barista}
                style={{ width: "35px", height: "33px" }}
                alt="Barista Icon"
              />
              <strong>{item.persentation}</strong>
            </li>
            <li className="tag__item">
              <FaClock
                style={{
                  color: "#FF0000",
                  marginRight: "0.7rem",
                  marginBottom: "0.2rem",
                  fontSize: "1.3rem",
                }}
              />
              <strong>Max Time :</strong>
              {item.maxTime.map((obj,index) => {
                return(<strong key={index}>{obj.time}</strong>) ;
              })}
            </li>
            <li className="tag__item notice">1 day Notice requried!</li>
            <li className="tag__item play green" onClick={toggle}>
              Book Now
            </li>
          </ul>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader className="border-0" toggle={toggle} close={closeBtn}>
            <h5 className="modal-title">How Do You Become an Affiliate?</h5>
          </ModalHeader>
          <ModalBody>
            <div className="instruction">
              <div className="row">
                <div className="col-md-12">
                  <strong>1. Register</strong>
                  <p>
                    The first step is to create an account at{" "}
                    <a href="http://www.creative-tim.com/">Creative Tim</a>. You
                    can choose a social network or go for the classic version,
                    whatever works best for you.
                  </p>
                </div>
                {/* <div className="col-md-4">
                  <div className="picture">
                    <img src="" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="instruction">
              <div className="row">
                <div className="col-md-10">
                  <strong>2. Apply</strong>
                  <p>
                    The first step is to create an account at{" "}
                    <a href="http://www.creative-tim.com/">Creative Tim</a>. You
                    can choose a social network or go for the classic version,
                    whatever works best for you.
                  </p>
                </div>
                {/* <div className="col-md-4">
                  <div className="picture">
                    <img
                      src="https://images.unsplash.com/photo-1519668167916-f522d6031d68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8568f5a200bf21a8209528bae85b022&auto=format&fit=crop&w=400&q=80"
                      alt="Thumbnail Image"
                      className="rounded img-fluid"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <p>
              If you have more questions, don't hesitate to contact us or send
              us a tweet @creativetim. We're here to help!
            </p>

            <div className="modal-footer border-0 text-center">
              <button
                type="button"
                className="btn btn-info btn-round"
                data-dismiss="modal"
              >
                Sounds good!
              </button>
            </div>
          </ModalBody>
        </Modal>
      </article>
    </div>
  );
};

export default CateringCard;
