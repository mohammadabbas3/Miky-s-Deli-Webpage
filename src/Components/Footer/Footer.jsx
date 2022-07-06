import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import '../styles/footer.css';
import footerlogo from "../../images/food-delivery.png"
import available247 from "../../images/available247.png"
import { BsFacebook, BsInstagram, BsSnapchat,BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
        <Col lg="3" md="4" sm="6" className='footer-col'>
          <div className='footer__logo text-start'>
            
            <img src= {footerlogo} alt="delivery image"/>
            <h5> Enjoy Free Delivery</h5>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate impedit quod numquam! Debitis officiis architecto optio ab, dolores, unde commodi at neque, porro placeat deleniti ipsam aut quis voluptatibus.</p> */}
          </div>
        </Col>
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
          <Col lg="3" md="4" sm="6" className='footer-col'>
            <h4>Our Services</h4>
            <hr />
            <ListGroup>
              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>Catering Services</span>
                
              </ListGroupItem>
              <ListGroupItem className=" branches-item border-0 ps-0">
                <span>Outdoor Live Cooking</span>
                
              </ListGroupItem>
              <ListGroupItem className=" available-text branches-item border-0 ps-0">
                <span>Available 24/7</span>
                
              </ListGroupItem>
              <ListGroupItem className='available-img branches-item border-0 ps-0'>
                <img src={available247} alt="logoavailable247" />
                
              </ListGroupItem>
              
             </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6" className='footer-col'>
          <Row className='about-us border-0 ps-0'>
              <h3>About Us</h3>
              <hr className='about-us-hr' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, neque! Tempora, hic praesentium. Delectus autem dignissimos voluptate explicabo fugit exercitationem?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, neque! Tempora, hic praesentium. Delectus autem dignissimos voluptate explicabo fugit exercitationem?</p>
            </Row>
            <ListGroup>
              <h4>Follow us on</h4>
              <hr  />
              <ListGroupItem className=" branches-item follow-icons border-0 ps-0">
                <Row>
                  <ul className='list-unstyled'>
                    <a href="https://www.facebook.com/mikysdeliminimart/"><BsFacebook/></a>
                    <a href="https://www.instagram.com/mikysdeli/?hl=en"><BsInstagram/></a>
                    <a href=""><BsSnapchat/></a>
                    <a href="https://wa.me/97455251120"><BsWhatsapp/></a>
                  </ul>
                </Row>
              </ListGroupItem>
            </ListGroup>
            
          </Col>
         
        </Row>
      </Container>
    </footer>
  )
}

export default Footer