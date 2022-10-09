import React from "react";
import "../styles/offers.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="offers">
      <section className="py-4">
        <div className="offers__bg-holder" />
        <div className="offers__container py-5">
          <div className="row flex-center">
            <div className="col-xxl-9 py-7 text-center">
              <h1 className="fw-bold mb-4 text-white fs-7">
                Are you ready to order
                <br />
                with the best deals?{" "}
              </h1>
              <Link to="/menu"><Button className="offers__btn" color="danger">PROCEED TO ORDER</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
