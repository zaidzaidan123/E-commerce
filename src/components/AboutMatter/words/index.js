import React from "react";
import "./Styles.css"

const Words = ({ paragraph, bold }) => {
  return <div className={bold === true ? "bold" : "notBold"}>{paragraph}</div>;
};

export default Words;
