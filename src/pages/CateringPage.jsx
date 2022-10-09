import React, { useState, useEffect } from "react";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import CateringCard from "../Components/UI/CateringCard";
import "../Components/styles/cateringPage.css";
import CateringImage1 from "../images/cateringImage(1).JPG";
import CateringImage2 from "../images/cateringImage(2).jpeg";
import CateringImage3 from "../images/cateringImage(3).JPG";
import GreenBanner from "../images/greenBanner.jpg";

const CateringPage = () => {
  return (
    <>
      <section className="catering__banner">
        {/* <div className="catering__content">
          <h3>Catering Menu</h3>
         
        </div> */}
        {/* <div
          className="cateringCarousel"
          // style={{
          //   maxHeight: "100%",
          //   maxWidth:"50%",
          //   marginLeft:"50rem",
          //   position:"center",
          //   borderLeft:"100px solid white",
          //   borderBottom:"400px solid transparent",
          //   overflow: "hidden",
          // }}
        >
          <UncontrolledCarousel
            items={[
              {
                src: CateringImage1,
                altText: "Slide 1",
              },
              {
                src: CateringImage2,
                altText: "Slide 2",
              },
              {
                src: CateringImage3,
                altText: "Slide 3",
              },
            ]}
          />
        </div> */}

        
      </section>

      <section>
        <Container className="cateringPage__container d-flex flex-wrap justify-content-around mb-4">
          <div className="cateringCard__title text-center">
            <h1 id="pageHeaderTitle">Catering Menu</h1>
          </div>
          <Row
            lg="12"
            md="12"
            sm="4"
            xs="2"
            className="cateringPage__row mt-4 d-flex flex-column justify-content-md-center"
          >
            {cateringMenuItems.map((item, index) => (
              <CateringCard key={index} item={item} />
            ))}
            {/* <CateringCard /> */}
            {/* <CateringCard /> */}
            {/* <CateringCard /> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

const cateringMenuItems = [
  {
    title: "Coffee Station For 20 person",
    img: "",
    arabicTittle: "قهوة استيشن 20 شخص",
    subTitle: "Enough for 20 persons with option to add count",
    arabicSubTitle: "يكفى الى 20 شخص مع خيار لاضافة",
    cateringMenuDescription:
      "Hot Drinks – Espresso, Latte, Cappuccino, Spanish Latte, Espresso Macchiato, Hazel Nut Spanish Coffee, Flatwhite, Americano Coffee",
    cateringMenuArabicDescription:
      "	قهوة ساخنة : اسبريسو, لاتية,كابيتشينو,اسبانتش لاتيه,اسبريسو ماكياتو.قهوة بندق اسبانية,فلات وايت,اماريكانو ",
    persentation: "1 Barista ",
    presentationArabic: "1 باريستا",
    notesList: [
      {
        notes:
          "👉  Advance Payment: A deposit of 50% will be collected on cash orders",
      },
      {
        notes:
          "👉  Cancellation: within 24 hours of the event is non- refundable",
      },
      {
        notes: "👉  Location inside Doha Only",
      },
    ],
    arabicNotesList: [
      {
        notes:
          "الدفعة المقدمة : سيتم استيفاء 50%من المبلغ الاجمالى من قبل المطعم 👈",
      },
      {
        notes:
          "	سياسة الالغاء : المبلغ لا يسترد اذا كان الالغاء خلال 24 ساعة من تاريخ الحدث 👈 ",
      },
      {
        notes: "	الموقع:داخل الدوحة فقط 👈",
      },
    ],
    setupTime: [{ title: "SetupTime", time: "1 Hour" }],
    requriement: [{ title: "Requriements", time: "Electric Outlet" }],
    maxTime: [ {title: "Max Time", time: "3 Hours"} ],
    options: ["4 choices of cold drinks", "Ice Latte", "Spanish Latte"],
    plates: [
      {
        title: "Add Plates per Plate",
        list: [
          {
            title: "Saffron Cake",
            price: "300",
          },
          {
            title: "Dolce Vanilla Cake",
            price: "300",
          },
          {
            title: "Brownies",
            price: "200",
          },
          {
            title: "Peach Cobbler",
            price: "250",
          },
        ],
      },
    ],
    extraService: [
      {
        title: "Extra Service",
        list: [
          {
            title: "Additional Server",
            price: "150",
          },
        ],
      },
    ],
  },
  {
    title: "Coffee Station For 20 person",
    img: "",
    arabicTittle: "قهوة استيشن 20 شخص",
    subTitle: "Enough for 20 persons with option to add count",
    arabicSubTitle: "يكفى الى 20 شخص مع خيار لاضافة",
    cateringMenuDescription:
      "Hot Drinks – Espresso, Latte, Cappuccino, Spanish Latte, Espresso Macchiato, Hazel Nut Spanish Coffee, Flatwhite, Americano Coffee",
    cateringMenuArabicDescription:
      "قهوة ساخنة : اسبريسو, لاتية,كابيتشينو,اسبانتش لاتيه,اسبريسو ماكياتو.قهوة بندق اسبانية,فلات وايت,اماريكانو ",
    persentation: "1 barista ",
    presentationArabic: "1 باريستا",
    notesList: [
      {
        notes:
          "👉  Advance Payment: A deposit of 50% will be collected on cash orders",
      },
      {
        notes:
          "👉  Cancellation: within 24 hours of the event is non- refundable",
      },
      {
        notes: "👉  Location inside Doha Only",
      },
    ],
    arabicNotesList: [
      {
        notes:
          "الدفعة المقدمة : سيتم استيفاء 50%من المبلغ الاجمالى من قبل المطعم 👈",
      },
      {
        notes:
          "	سياسة الالغاء : المبلغ لا يسترد اذا كان الالغاء خلال 24 ساعة من تاريخ الحدث 👈 ",
      },
      {
        notes: "	الموقع:داخل الدوحة فقط 👈",
      },
    ],
    setupTime: [{ title: "SetupTime", time: "1 Hour" }],
    requriement: [{ title: "Requriements", time: "Electric Outlet" }],
    maxTime: [{ title: "Max Time", time: "3 Hours" }],
    options: ["4 choices of cold drinks", "Ice Latte", "Spanish Latte"],
    plates: [
      {
        title: "Add Plates per Plate",
        list: [
          {
            title: "Saffron Cake",
            price: "300",
          },
          {
            title: "Dolce Vanilla Cake",
            price: "300",
          },
          {
            title: "Brownies",
            price: "200",
          },
          {
            title: "Peach Cobbler",
            price: "250",
          },
        ],
      },
    ],
    extraService: [
      {
        title: "Extra Service",
        list: [
          {
            title: "Additional Server",
            price: "150",
          },
        ],
      },
    ],
  },
];

export default CateringPage;
