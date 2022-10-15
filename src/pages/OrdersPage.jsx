import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useStateValue } from "../context/StateProvider";
import '../Components/styles/ordersPage.css'

const OrdersPage = () => {
  const [{ user, cart }] = useStateValue();
  return (
    <>
      <Container>
        <Row>
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
    </>
  );
};

export default OrdersPage;
