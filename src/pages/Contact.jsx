// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='contact'>Contact</div>
//   )
// }

// export default Contact





import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import "../styles/footer.css";

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

            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{
                height: 280,
                flexGrow: 1,
                maxWidth: 400,
                // overflowY: "auto",
              }}
            >
              <TreeItem nodeId="15" sx={{ pb: 1.5 }} label="Pearl Qatar">
                <TreeItem nodeId="1" label="44410990" />
                <TreeItem nodeId="2" label="55251120" />
              </TreeItem> 
              <TreeItem nodeId="3" sx={{ pb: 1.5 }} label="Lusail Food Arena">
                <TreeItem nodeId="4" label="66992879" />
              </TreeItem>
              <TreeItem
                nodeId="5"
                sx={{ pb: 1.5 }}
                label="Duhail Destination Box"
              >
                <TreeItem nodeId="6" label="33267460" />
              </TreeItem>
              <TreeItem nodeId="7" sx={{ pb: 1.5 }} label="Qatar Sports Club">
                <TreeItem nodeId="8" label="55999274 - 55999674" />
              </TreeItem>

              <TreeItem nodeId="9" sx={{ pb: 2 }} label="Royal Plaza">
                <TreeItem nodeId="10" label="44477763 - 33588786" />
              </TreeItem>
              <TreeItem nodeId="11" sx={{ pb: 2 }} label="ASAS Twin Towers">
                <TreeItem nodeId="12" label="44410993 - 33770383" />
              </TreeItem>
              <TreeItem nodeId="13" sx={{ pb: 2 }} label="Aspire Zone">
                <TreeItem nodeId="14" label="44410993 - 33770383" />
              </TreeItem>
            </TreeView>

            {/* <ListGroup className="deliver__time-list">
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
            </ListGroup> */}
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
            <Container>
            <div className="map__container">

              </div>
            </Container>
            <ListGroup>
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






import React from "react";
import { Link } from "react-router-dom";
import "../../Components/styles/userDashboard.css";

import { FavoriteBorder, Person, Place } from "@mui/icons-material";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import { Card, styled, Typography, Box } from "@mui/material";
import { Fragment } from "react";


const MainContainer = styled(Card)(({ theme }) => ({
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    maxHeight: "calc(100vh - 64px)",
  },
}));

const toggleActiveClass = (event) => {
  event.currentTarget.classList.toggle("active");
};

const UserDashboard = () => {
  return (
    <div className="profile__container">
      <section>
        <MainContainer className="profile__container-dashboard">
          {linkList.map((item) => (
            <Fragment key={item.title}>
              <Typography p="26px 30px 1rem" color="grey.600" fontSize="12px">
                {item.title}
              </Typography>

              {item.list.map((item) => (
                <Link
                  className="profile__container-links"
                  // id = {window.location.pathname == item.herf ? "active" : " "}
                  to={item.href}
                  key={item.title}
                  onClick={toggleActiveClass}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <item.icon
                      color="inherit"
                      fontSize="small"
                      className="nav-icon"
                    />
                    <span>{item.title}</span>
                  </Box>

                  <span>{item.count}</span>
                </Link>
              ))}
            </Fragment>
          ))}
        </MainContainer>
      </section>
    </div>
  );
};

const linkList = [
  {
    title: "DASHBOARD",
    list: [
      {
        href: "/orders",
        title: "Orders",
        icon: ShoppingBagOutlined,
        count: 5,
      },
      {
        href: "/favourites",
        title: "Favourites",
        icon: FavoriteBorder,
        count: 19,
      },
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    list: [
      {
        href: "/profileInfo",
        title: "Profile Info",
        icon: Person,
        count: 3,
      },
      {
        href: "/address",
        title: "Addresses",
        icon: Place,
        count: 16,
      },
    ],
  },
];

export default UserDashboard;
