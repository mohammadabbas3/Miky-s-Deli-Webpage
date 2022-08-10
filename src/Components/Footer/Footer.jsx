import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../styles/footer.css";
import footerlogo from "../../images/food-delivery.png";
import available247 from "../../images/available247.png";
import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="mb-4">
        <Row>
          <Col lg="3" md="4" sm="6">
            <h4>Our Branches</h4>
            <hr />
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>Pearl Qatar</span>
                <p>44410990 - 55251120 </p>
              </ListGroupItem>

              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>Duhail Destination Box</span>
                <p>33267460</p>
              </ListGroupItem>

              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>Qatar Sports Club</span>
                <p>55999274 - 55999674</p>
              </ListGroupItem>
              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>Lusail Food Arena</span>
                <p>66992879</p>
              </ListGroupItem>
              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>Royal Plaza</span>
                <p>44477763 - 33588786</p>
              </ListGroupItem>
              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>ASAS Twin Towers</span>
                <p>44410993 - 33770383</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          {/* <Col lg="3" md="4" sm="6" className="footer-col">
            <ListGroup>
              <ListGroupItem className="follow-icons border-0 ps-0">
                <ul className="socials list-unstyled">
                  <a href="https://www.facebook.com/mikysdeliminimart/">
                    <BsFacebook className="icon facebook" />
                  </a>
                  <a href="https://www.instagram.com/mikysdeli/?hl=en">
                    <BsInstagram className="icon" />
                  </a>
                  <a href="">
                    <BsSnapchat className="icon" />
                  </a>
                  <a href="https://wa.me/97455251120">
                    <BsWhatsapp className="icon" />
                  </a>
                </ul>
              </ListGroupItem>
            </ListGroup>
          </Col> */}
          <Col lg="9" md="4" sm="6" className="footer-col">
            <ListGroup>
              <ListGroupItem className="w-100 h-100">
                <div className="map__container text-center">
                  <h4>Map</h4>
                  <div className="map">
                    <div>ok</div>
                    <div>done</div>
                    <div>ok</div>
                    <div>done</div>
                    <div>ok</div>
                    <div>done</div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="follow-icons border-0 ps-0 pe-0">
                <ul className="socials text-center list-unstyled">
                  <a href="https://www.facebook.com/mikysdeliminimart/">
                    <BsFacebook className="icon facebook" />
                  </a>
                  <a href="https://www.instagram.com/mikysdeli/?hl=en">
                    <BsInstagram className="icon" />
                  </a>
                  <a href="">
                    <BsSnapchat className="icon" />
                  </a>
                  <a href="https://wa.me/97455251120">
                    <BsWhatsapp className="icon" />
                  </a>
                </ul>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <div className=" text-center copyrightContainer">
        <p>© 2022 Yum! III (UK) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
