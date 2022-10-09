import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet";
import { useStateValue } from "../context/StateProvider";
import '../Components/styles/admin.css'
import { MdAdd } from "react-icons/md";
import {Link } from "react-router-dom";
const Admin = () => {

    const [{ user, cart }] = useStateValue();
  return (
    <Helmet title="Admin">
      <section>
        <Container>
          <Row>
            <Col lg= '2' md={{ span: 4, offset: 4 }}>
              <div className="addItemContainer" >
              <Link to={"/createItem"}>
                  <button className="mt-3 btn newItem">
                    Add New Item to the Menu{" "}
                    <span>
                      <MdAdd />
                    </span>
                  </button>
                </Link>
              </div>
            </Col>
            <Col lg="12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th>Item Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {cartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))} */}
                </tbody>
              </table>

              {/* total section */}
              <div className=" total mt-4">
                <h6>
                  Subtotal: QAR
                  <span className="cart__subtotal">SubAmount</span>
                </h6>
                <h6>
                  Delivery:
                  <span className="cart__subtotal">Free</span>
                </h6>
                
              </div>
            </Col>
          </Row>
          
        </Container>
      </section>
    </Helmet>
  );
};

export default Admin;
