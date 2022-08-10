import React from "react";
import '../Components/styles/helmet.css'

const Helmet = (props) => {
  document.title = "Miky's Deli Restaurant -" + props.title;
  return <div className="helmet w-100">{props.children}</div>;
};

export default Helmet;